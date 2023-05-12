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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NumericFormat } from 'react-number-format';
import LoadingButton from '@mui/lab/LoadingButton';
import { createOrder, applyWithdraw } from '@/services';
import { toast } from 'react-toastify';

const TransferIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/transfer.png" />;
const RechargeIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/recharge.png" />;
const WithdrawalIcon = ({disabled}) => <img className={disabled ? 'filter grayscale' : ''} src="/assets/images/personal/withdrawal.png" />;

const VisaIcon = ({disabled}) => <img className={`h-24 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/visa@2x.png" />;
const VisaHelpIcon = ({disabled}) => <img className={`h-24 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/visa_help@2x.png" />;
const USDTIcon = ({disabled}) => <img className={`h-24 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt@2x.png" />;
const USDTHelpIcon = ({disabled}) => <img className={`h-24 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt_help@2x.png" />;

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
    props: {...data, ...wallet, rate },
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

const HomePage = ({ balance, userName, ctid, completeVerify, rate }) => {
  const router = useRouter();
  const [open, setOpen] = useState(!completeVerify);
  const [showFound, setShowFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(0);
  const [expand, setExpand] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [amount, setAmount] = useState('');
  const [channel, setChannel] = useState('1012');
  const [bankName, setBankName] = useState('');
  const [realName, setRealName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  
  const usdCurrency = rate.find(({currency}) => currency === 'USD');
  
  const {
    run: handleWithdraw,
  } = useThrottleFn(() => {
    if (!usdCurrency) {
      toast.warn('管理员未设置当前汇率，请联系客服！');
      return;
    }
    console.log(Math.floor(amount / usdCurrency?.rate * 100) / 100)
    if (Math.floor(amount / usdCurrency?.rate * 100) / 100 > (balance / 100)) {
      toast.warn('提现金额不能大于可用余额');
      return;
    }
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

  const {
    run: handleFound,
  } = useThrottleFn(() => {
    setLoading(true);
    createOrder({ amount: amount * 100, channel }).then(({code, data}) => {
      if (!code && data) {
        setFinish(1)
        window.open(data, '_blank ');
      }
      setShowFound(false)
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
            您还未完成身份认证，账户信息暂不可用，<a className='text-blue-600 underline' href='/personal-center/verify'>立即前往</a> 完成认证！
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
                  <p className="text-base text-gray-600">你的钱包</p>
                  <p className="text-2xl font-semibold"><NumericFormat value={Math.floor(balance) / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD</p>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <p className="text-base text-gray-600 font-normal">昵称: <span className="ml-4 text-gray-900">{ userName }</span></p>
                  <p className="text-base text-gray-600 font-normal">cTID账号: <span className="ml-4 text-gray-900">{ ctid || '-' }</span></p>
                </div>
              </div>
            </div>
            <Stack className="flex-col gap-4 sm:flex-row mt-10 mb-2" spacing={2} direction="row">
              <Button className="sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled={!completeVerify} variant="outlined" size="large" startIcon={<TransferIcon disabled={!completeVerify} />} onClick={() => setShowFound(true)}>
                充值
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled variant="outlined" size="large" startIcon={<RechargeIcon disabled />} onClick={() => router.push('/personal-center/transfer')}>
                转账
              </Button>
              <Button className="ml-0 sm:w-2/6 py-2" sx={{borderRadius: 6}} disabled={!completeVerify} variant="outlined" size="large" startIcon={<WithdrawalIcon disabled={!completeVerify} />} onClick={() => setWithdraw(true)}>
                提现
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
              <span className='text-base'>交易记录</span>
              <img className="w-4 h-4" src="/assets/images/arrow.png" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {expand && <TransferRecords />}
          </AccordionDetails>
        </Accordion>
      </div>

      <Dialog open={showFound} disableEscapeKeyDown>
        <DialogTitle>充值</DialogTitle>
        <DialogContent>
          <Stack sx={{ width: 320, p: 2 }} spacing={2}>
            <TextField
              error={(parseInt(amount || 0) % 100) !== 0}
              label="充值金额（RMB）"
              name="numberformat"
              value={amount}
              helperText={(parseInt(amount || 0) % 100) !== 0 ? '请输入100的倍数' : ''}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatRMB,
              }}
              fullWidth
            />

            <TextField
              label="充值金额（USD）"
              name="numberformat"
              value={usdCurrency ? (Math.floor(amount / usdCurrency?.rate * 100) / 100) : 0}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatUSD,
              }}
              disabled
              fullWidth
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">请选择支付渠道</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={channel}
                onChange={e => setChannel(e.target.value)}
                name="radio-buttons-group"
              >
                <FormControlLabel value="1012" control={<Radio />} label={<VisaIcon />} />
                <FormControlLabel value="1013" control={<Radio />} label={<VisaHelpIcon disabled />} disabled />
                <FormControlLabel value="1014" control={<Radio />} label={<USDTIcon disabled />} disabled />
                <FormControlLabel value="1015" control={<Radio />} label={<USDTHelpIcon disabled />} disabled />
              </RadioGroup>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowFound(false)} disabled={loading}>取消</Button>
          <LoadingButton
            size="small"
            onClick={handleFound}
            loading={loading}
            disabled={loading || !amount || (parseInt(amount || 0) % 100) !== 0}
          >
            <span>确认充值</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Dialog open={withdraw} disableEscapeKeyDown>
        <DialogTitle>提现</DialogTitle>
        <DialogContent>
          <Stack sx={{ width: 320, p: 2 }} spacing={2}>
            <TextField
              label="开户银行名称"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              fullWidth
            />
            <TextField
              label="银行卡号"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatCard,
              }}
              fullWidth
            />
            <TextField
              label="真实姓名"
              value={realName}
              onChange={e => setRealName(e.target.value)}
              fullWidth
            />
            <TextField
              error={(parseInt(amount || 0) % 100) !== 0}
              label="提现金额（RMB）"
              value={amount}
              helperText={(parseInt(amount || 0) % 100) !== 0 ? '请输入100的倍数' : ''}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatRMB,
              }}
              fullWidth
            />

            <TextField
              label="提现金额（USD）"
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
          <Button onClick={() => setWithdraw(false)} disabled={loading}>取消</Button>
          <LoadingButton
            size="small"
            onClick={handleWithdraw}
            loading={loading}
            disabled={loading || !bankName || !cardNumber || !realName || !amount || (parseInt(amount || 0) % 100) !== 0}
          >
            <span>确认提现</span>
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
              '订单创建成功'
              : '提现申请成功'
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              finish === 1 ?
                '请及时前往指定页面完成支付充值，如已完成充值，您可前往交易记录中查看到您的充值记录，等待管理员审核后，充值金额会即时转入您的钱包中。'
                : '您的提现申请已经提交，等待管理员审核通过后，提现金额会即时转入您的银行账户中'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFinish(0)} autoFocus>
            知道了
          </Button>
        </DialogActions>
      </Dialog>
  
    </Layout>
  );
};

export default HomePage;
