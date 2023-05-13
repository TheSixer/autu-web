import { useState, forwardRef, useEffect } from 'react';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import Link from "next/link";
import Button from '@mui/material/Button';
import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NumericFormat } from 'react-number-format';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useThrottleFn } from 'ahooks';
import { createOrder, getPolicy, getImgUrl } from '@/services';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { FormattedMessage, useIntl } from "react-intl";

export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(context.req, context.res, authOptions)
  const resp = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/exchange/rate/list', {
    headers: { token: session.user.accessToken }
  });
  const { code, data: rate } = await resp.json();

  if (code) {
    return {
      redirect: {
        permanent: false,
        destination: '/personal-center'
      }
    }
  }

  return {
    // 在组件 props 中 可以拿到 data
    props: { rate },
  }
}

const types = [{
  name: 'USDT-TRC20',
  payName: 'TNwzeoaW3gLRLEugxa8ghUhtMK3RFGjDNm',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/trc20.jpg',
}, {
  name: 'USDC-TRC20',
  payName: 'TNwzeoaW3gLRLEugxa8ghUhtMK3RFGjDNm',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/trc20.jpg',
}, {
  name: 'ETH-ERC20',
  payName: '0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg',
}, {
  name: 'USDT-ERC20',
  payName: '0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg',
}, {
  name: 'USDC-ERC20',
  payName: '0x0fc51e38582596Dfa9DaE5150972c69fC8Fbc5D1',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/erc20.jpg',
}, {
  name: 'UDST-BEP20',
  payName: '0xC968969483eD38b3144B639332432a70c86192A8',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg',
}, {
  name: 'USDC-BEP20',
  payName: '0xC968969483eD38b3144B639332432a70c86192A8',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg',
}, {
  name: 'BUSD-BEP20',
  payName: '0xC968969483eD38b3144B639332432a70c86192A8',
  barcode: 'https://autu-public-bucket.oss-cn-hongkong.aliyuncs.com/pay/bep20.jpg',
}]

// const VisaHelpIcon = ({disabled}) => (
//   <Stack>
//     <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/visa_help@2x.png" />
//     <span>第三方支付</span>
//   </Stack>
// );
const VisaIcon = ({disabled}) => (
  <Stack>
    <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/visa@2x.png" />
    <span><FormattedMessage id='mine.index.recharge.thirdPay' /></span>
  </Stack>
);
const USDTHelpIcon = ({disabled}) => (
  <Stack>
    <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt_help@2x.png" />
    <span><FormattedMessage id='mine.index.recharge.tnternationalWire' /></span>
  </Stack>
);
const USDTIcon = ({disabled}) => (
  <Stack>
    <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt@2x.png" />
    <span><FormattedMessage id='mine.index.recharge.digitalCurrency' /></span>
  </Stack>
);

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
      prefix="$"
    />
  );
});

const HomePage = ({ rate }) => {
  const [loading, setLoading] = useState(false);
  const [tips, setTips] = useState(false);
  const [userPayImg, setUserPayImg] = useState('');
  const [amount, setAmount] = useState('');
  const [channel, setChannel] = useState('1012');
  const [payType, setPayType] = useState(null);
  const router = useRouter();
  const intl = useIntl();

  const rmbAmount = intl.formatMessage({ id: "mine.index.personal.recharge.amount.rmb" });
  const usdAmount = intl.formatMessage({ id: "mine.index.personal.recharge.amount.usd" });
  const lessAmount = intl.formatMessage({ id: "mine.index.personal.recharge.amount.less" });
  const orderCreatedTxt = intl.formatMessage({ id: "mine.index.personal.order.created" });

  const usdCurrency = rate.find(({currency}) => currency === 'USD');

  const {
    run: handleConfirm,
  } = useThrottleFn(() => {
    setLoading(true);
    createOrder({
      type: channel === '1012' ? 'thirdPay' : channel,
      amount: amount * 100,
      channel: channel === '1012' ? '1012' : '',
      userPayImg
    }).then(({code, data}) => {
      if (!code) {
        if (channel === '1012') {
          window.open(data, '_blank ');
        } else {
          toast.success(orderCreatedTxt);
        }
        setTips(true)
      }
      setLoading(false);
    });
  });

  const handleSubmit = () => {
    if (channel === '1012') {
      handleConfirm();
    } else {
      handleConfirm();
    }
  }

  const onFileChange = (file) => {
    getPolicy().then(({code, data}) => {
      if (!code) {
        uploadImg(data, file)
      }
    })
  }

  const uploadImg = (params, file) => {
    const formdata = new FormData();
    formdata.append('OSSAccessKeyId', params.accessid);
    formdata.append('key', params.dir + '/' + file.name);
    formdata.append('success_action_status', '200');
    formdata.append('policy', params.policy);
    formdata.append('signature', params.signature);
    formdata.append('file', file);

    fetch(params.host, {
      method: 'POST',
      body: formdata
    }).then(() => {
      fetchImg(`${params.dir}/${file.name}`);
    })
  }

  const fetchImg = async (url) => {
    getImgUrl(url).then(({code, data}) => {
      if (!code) {
        setUserPayImg(data);
      }
    });
  }

  useEffect(() => {
    setPayType(null);
    setAmount('');
    setUserPayImg('')
  }, [channel, tips])

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span><FormattedMessage id='head.menu.back' /></span>
          </Link>
        </div>
        <Paper sx={{maxWidth: 850, mx: 'auto', p: 4}}>

          <h4 className='mb-4 text-black font-semibold'><FormattedMessage id='mine.index.personal.recharge' /></h4>
          
          <div className='px-32'>
            <Stack direction="column">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"><FormattedMessage id='mine.index.recharge.payType' /></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={channel}
                  onChange={e => setChannel(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="1012" control={<Radio />} label={<VisaIcon />} />
                  {/* <FormControlLabel value="1013" control={<Radio />} label={<VisaIcon />} /> */}
                  <FormControlLabel value="internationalTransfer" control={<Radio />} label={<USDTHelpIcon />} />
                  <FormControlLabel value="digitalCurrency" control={<Radio />} label={<USDTIcon />} />
                </RadioGroup>
              </FormControl>
              {
                channel === '1012' ? (
                  <TextField
                    sx={{my: 2, width: 350 }}
                    error={!!amount && amount < 100}
                    label={rmbAmount}
                    name="numberformat"
                    value={amount}
                    helperText={amount && amount < 100 ? lessAmount : ''}
                    onChange={e => setAmount(e.target.value)}
                    InputProps={{
                      inputComponent: NumericFormatRMB,
                    }}
                    fullWidth
                  />
                ) : null
              }

              <TextField
                sx={{mt: 2, width: 350}}
                label={usdAmount}
                name="numberformat"
                value={channel === 'internationalTransfer' || channel === 'digitalCurrency' ? amount : usdCurrency ? (Math.floor(amount / usdCurrency?.rate * 100) / 100) : 0}
                onChange={e => setAmount(e.target.value)}
                InputProps={{
                  inputComponent: NumericFormatUSD,
                }}
                disabled={channel === '1012'}
                fullWidth
              />
              {
                channel === 'internationalTransfer' ? (
                  <Card sx={{ my: 2 }} variant="outlined">
                    <CardContent sx={{p: 4}}>
                      <h4 className='mb-2 text-base font-semibold'><FormattedMessage id='mine.index.recharge.bankInfo' /></h4>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.bankName' /></p>
                        <p className='text-base flex-shrink-0'>Pacific Private Bank</p>
                      </div>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.backAddress' /></p>
                        <p className='text-base break-words'>1st floor, Govant Building, 278 Kumul Hwy, Port Vila</p>
                      </div>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'>SWIFT：</p>
                        <p className='text-base break-words'>PPBLVUVUXXX</p>
                      </div>
                      <h4 className='my-2 text-base font-semibold'><FormattedMessage id='mine.index.recharge.recieveInfo' /></h4>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.recieveName' /></p>
                        <p className='text-base break-words'>Autu Securities International Inc. – Client Account</p>
                      </div>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.recieveAccount' /></p>
                        <p className='text-base break-words'>6550-1-80008</p>
                      </div>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.recieveCurrency' /></p>
                        <p className='text-base break-words'>USD</p>
                      </div>
                      <div className='flex mb-1'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.recieveAddress' /></p>
                        <p className='text-base break-words'>Law Partners House, Po Box 212, Port Vila, Vanuatu</p>
                      </div>
                      <div className='flex'>
                        <p className='text-base flex-shrink-0 w-32'><FormattedMessage id='mine.index.recharge.remark' />：</p>
                        <p className='text-base break-words'><FormattedMessage id='mine.index.recharge.nameSpell' /></p>
                      </div>
                    </CardContent>
                  </Card>
                ) : null
              }
              {
                channel === 'digitalCurrency' ? (
                  <>
                    <p className='mt-2 text-base text-gray-500'><FormattedMessage id='mine.index.recharge.currency' /></p>
                    <Stack direction="row" flexWrap="wrap">
                      {
                        types.map((opt) => (
                          <Button variant={ payType?.name === opt.name ? 'contained' : 'outlined'} sx={{m: 1}} color="warning" key={opt.name} onClick={() => setPayType(opt)}>
                            { opt.name }
                          </Button>
                        ))
                      }

                    </Stack>
                    {
                      payType ? (
                        <Card sx={{ width: 520, my: 2 }} variant="outlined">
                          <CardContent>
                            <h4 className='mb-4 text-base font-semibold'><FormattedMessage id='mine.index.recharge.billingInfo' /></h4>
                            <div className='flex'>
                              <p className='text-base flex-shrink-0 w-24'><FormattedMessage id='mine.index.recharge.digitalCurrency' /></p>
                              <p className='text-base break-words'>{payType.name}</p>
                            </div>
                            <div className='flex my-2'>
                              <p className='text-base flex-shrink-0 w-24'><FormattedMessage id='mine.index.recharge.walletAddress' /></p>
                              <p className='text-base break-words'>{ payType.payName }</p>
                            </div>
                            <div className='flex'>
                              <p className='text-base flex-shrink-0 w-24'><FormattedMessage id='mine.index.recharge.barcode' /></p>
                              <p className='text-base break-words'>
                                <img width={180} src={payType.barcode} />
                              </p>
                            </div>
                            <p className='mt-4 text-base text-gray-500'><FormattedMessage id='mine.index.recharge.warning' /></p>
                          </CardContent>
                        </Card>
                      ) : null
                    }
                  </>
                ) : null
              }
              {
                channel !== '1012' ? (
                  <Box>
                    <p className='my-2 text-base text-gray-500'><FormattedMessage id='mine.index.recharge.uploadPaymentVoucher' /></p>
                    <IconButton className='w-72 h-36 border border-gray-400 bg-gray-100' aria-label="upload picture" sx={{borderRadius: '10px'}} component="label">
                      <input hidden accept="image/*" type="file" onChange={e => onFileChange(e.target.files[0])} />
                      {!userPayImg && <PhotoCamera fontSize='large' />}
                      {userPayImg && <img className='w-full h-full' src={userPayImg} />}
                    </IconButton>
                  </Box>
                ) : null
              }

              <LoadingButton
                className={`${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={!amount || (!payType && channel === 'digitalCurrency')}
                sx={{ mt: 4, py: 1.5, borderRadius: 6, width: 350 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                <FormattedMessage id='mine.index.submit' />
              </LoadingButton>
            </Stack>
          </div>
        </Paper>
      </div>

      <Dialog
        open={tips}
        keepMounted
        onClose={() => setTips(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"提示"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            订单已提交，请确认您已完成转账支付，如支付已完成，您可前往审核页面查看当前充值记录
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTips(false)}>继续充值</Button>
          <Button onClick={() => router.push('/personal-center/approval-records')}>立即前往</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}

export default HomePage;
