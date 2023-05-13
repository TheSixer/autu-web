import { useState, forwardRef, useEffect } from 'react';
import Layout from "@/components/PersonalCenterLayout";
import TransferRecords from "@/components/TransferRecords";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { useRouter } from 'next/router';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useThrottleFn } from 'ahooks';
import DialogTitle from '@mui/material/DialogTitle';
import { NumericFormat } from 'react-number-format';
import LoadingButton from '@mui/lab/LoadingButton';
import { createOrder, applyWithdraw } from '@/services';
import { FormattedMessage, useIntl } from "react-intl";

const TransferIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/transfer.png" />;
const RechargeIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/recharge.png" />;
const WithdrawalIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/withdrawal.png" />;

export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(context.req, context.res, authOptions)
  const res = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
    headers: { token: session.user.accessToken }
  });
  const { code, data } = await res.json();
  const response = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/wallet/info', {
    headers: { token: session.user.accessToken }
  });
  const { data: wallet } = await response.json();
  const respon = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/account/list', {
    headers: { token: session.user.accessToken }
  });
  const accounts = await respon.json();
  const resp = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/exchange/rate/list', {
    headers: { token: session.user.accessToken }
  });
  const { data: rate } = await resp.json();

  if (code || !data.completeBaseInfo) {
    return {
      redirect: {
        permanent: false,
        destination: code ? '/personal-center' : '/personal-center/improve',
      }
    }
  }

  return {
    // 在组件 props 中 可以拿到 data
    props: {...data, ...wallet, rate, accounts: accounts?.data || [] },
  }
}

const NumericFormatCard = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="#### #### #### ####"
      mask="_"
    />
  );
});

const NumericFormatRMB = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="¥"
    />
  );
});

const NumericFormatUSD = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="≈ $"
    />
  );
});

const HomePage = ({ balance, userName, ctid, completeVerify, rate, accounts }) => {
  const router = useRouter();
  const [open, setOpen] = useState(!completeVerify);
  const [showFound, setShowFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(0);
  const [expand, setExpand] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [realName, setRealName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const intl = useIntl();

  const bankNameTxt = intl.formatMessage({ id: "mine.index.personal.bank.name" });
  const backCardTxt = intl.formatMessage({ id: "mine.index.personal.bank.card" });
  const realnameTxt = intl.formatMessage({ id: "mine.index.personal.realname" });
  const withdrawUSD = intl.formatMessage({ id: "mine.index.personal.withdraw.amount.usd" });
  const withdrawRMB = intl.formatMessage({ id: "mine.index.personal.withdraw.amount.rmb" });
  const withdrawLess = intl.formatMessage({ id: "mine.index.personal.withdraw.amount.less" });
  const orderCreated = intl.formatMessage({ id: "mine.index.personal.order.created" });
  const withdrawSubmitted = intl.formatMessage({ id: "mine.index.personal.withdraw.submitted" });
  const rechargeTips = intl.formatMessage({ id: "mine.index.personal.recharge.tips" });
  const withdrawTips = intl.formatMessage({ id: "mine.index.personal.withdraw.tips" });
  
  const usdCurrency = rate.find(({currency}) => currency === 'USD');
  
  const {
    run: handleWithdraw,
  } = useThrottleFn(() => {
    setLoading(true);
    applyWithdraw({
      bankName,
      userName: realName,
      cardNumber,
      amount: amount * 100, 
    }).then(({code, data}) => {
      if (!code && data) {
        setFinish(2)
      }
      setWithdraw(false)
      setLoading(false);
    });
  });

  useEffect(() => {
    setAmount('')
  }, [showFound, withdraw]);

  return (
    <Layout>
  
      <div className="container py-4">
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <FormattedMessage id="mine.index.personal.verifyTips" /><a className='text-blue-600 underline' href='/personal-center/verify'><FormattedMessage id="mine.index.personal.goNow" /></a> <FormattedMessage id="mine.index.personal.toVerify" />
          </Alert>
        </Collapse>
        <Card className="mt-4" variant="outlined">
          <CardContent sx={{ p: 4 }}>
            <div className="flex flex-col md:flex-row">
              <div className="flex-none relative">
                <img src="/assets/images/personal/card@2x.png" width={342} />
                <p className="absolute left-4 bottom-4 text-lg font-semibold">{ userName }</p>
              </div>
              <div className="flex flex-col justify-between flex-1 p-4 md:px-10 md:py-3.5">
                <div className="mb-6 md:mb-0">
                  <p className="text-base text-gray-600"><FormattedMessage id="mine.index.personal.yourWallet" /></p>
                  <p className="text-2xl font-semibold"><NumericFormat value={Math.floor(balance) / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD</p>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <p className="text-base text-gray-600 font-normal">
                    <span className='mr-4'><FormattedMessage id="mine.index.personal.nikename" /></span>
                    <span className="text-gray-900">{ userName }</span>
                  </p>
                  <p className="text-base text-gray-600 font-normal">
                    <span className='mr-4'><FormattedMessage id="mine.index.personal.ctid" /></span>
                    <span className="text-gray-900">{ ctid || '-' }</span>
                  </p>
                </div>
              </div>
            </div>
            <Stack className="flex-col gap-4 sm:flex-row mt-10 mb-2" spacing={2} direction="row">
              <Button className="sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled={!completeVerify || !accounts?.length} variant="outlined" size="large" startIcon={<TransferIcon disabled={!completeVerify || !accounts?.length} />} onClick={() => router.push('/personal-center/recharge')}>
                <FormattedMessage id="mine.index.personal.recharge" />
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled variant="outlined" size="large" startIcon={<RechargeIcon disabled />} onClick={() => router.push('/personal-center/transfer')}>
                <FormattedMessage id="mine.index.personal.transfer" />
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled={!completeVerify || !accounts?.length} variant="outlined" size="large" startIcon={<WithdrawalIcon disabled={!completeVerify || !accounts?.length} />} onClick={() => setWithdraw(true)}>
                <FormattedMessage id="mine.index.personal.withdraw" />
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Accordion sx={{ mt: 4 }} onChange={(e, value) => setExpand(value)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack sx={{ mx: 'auto' }} direction="row" alignItems="center" justifyContent="center" spacing={2}>
              <span className='text-base'><FormattedMessage id="mine.index.personal.tradingRecords" /></span>
              <img className="w-4 h-4" src="/assets/images/arrow.png" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {expand && <TransferRecords />}
          </AccordionDetails>
        </Accordion>
      </div>

      <Dialog open={withdraw} disableEscapeKeyDown>
        <DialogTitle><FormattedMessage id="mine.index.personal.withdraw" /></DialogTitle>
        <DialogContent>
          <Stack sx={{ width: 320, p: 2 }} spacing={2}>
            <TextField
              label={bankNameTxt}
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              fullWidth
            />
            <TextField
              label={backCardTxt}
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatCard,
              }}
              fullWidth
            />
            <TextField
              label={realnameTxt}
              value={realName}
              onChange={e => setRealName(e.target.value)}
              fullWidth
            />
            <TextField
              error={amount && amount < 100}
              label={withdrawRMB}
              value={amount}
              helperText={amount && amount < 100 ? withdrawLess : ''}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatRMB,
              }}
              fullWidth
            />

            <TextField
              label={withdrawUSD}
              value={usdCurrency ? (Math.floor(amount / usdCurrency?.rate * 100) / 100) : 0}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatUSD,
              }}
              disabled
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setWithdraw(false)} disabled={loading}><FormattedMessage id="cancel" /></Button>
          <LoadingButton
            size="small"
            onClick={handleWithdraw}
            loading={loading}
            disabled={loading || !bankName || !cardNumber || !realName || !amount || amount < 100}
          >
            <span><FormattedMessage id="mine.index.personal.withdraw.confirm" /></span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Dialog
        open={!!finish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {
            finish === 1 ?
              orderCreated
              : withdrawSubmitted
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              finish === 1 ?
                rechargeTips
                : withdrawTips
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFinish(0)} autoFocus>
            <FormattedMessage id="mine.index.personal.gotit" />
          </Button>
        </DialogActions>
      </Dialog>
  
    </Layout>
  );
};

export default HomePage;
