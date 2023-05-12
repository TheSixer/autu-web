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
import { createOrder } from '@/services';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

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
    <span>第三方支付</span>
  </Stack>
);
const USDTHelpIcon = ({disabled}) => (
  <Stack>
    <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt_help@2x.png" />
    <span>国际电汇</span>
  </Stack>
);
const USDTIcon = ({disabled}) => (
  <Stack>
    <img className={`h-16 ${ disabled ? 'filter grayscale' : ''}`} src="/assets/images/pay/usdt@2x.png" />
    <span>数字货币</span>
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
  const [leverageInCents, setLeverageInCents] = useState(100);
  const [depositCurrency, setDepositCurrency] = useState('USD');
  const [userPayImg, setUserPayImg] = useState('');
  const [amount, setAmount] = useState('');
  const [channel, setChannel] = useState('1012');
  const [payType, setPayType] = useState(null);
  const router = useRouter();

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
    }).then(({code}) => {
      if (!code) {
        toast.success('账户创建成功');
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

  useEffect(() => {
    setPayType(null);
    setAmount('');
  }, [channel])

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span>返回</span>
          </Link>
        </div>
        <Paper sx={{maxWidth: 850, mx: 'auto', p: 4}}>

          <h4 className='mb-4 text-black font-semibold'>充值</h4>
          
          <div className='px-32'>
            <Stack direction="column">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">*请选择支付渠道</FormLabel>
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
                ) : null
              }

              <TextField
                sx={{mt: 2, width: 350}}
                label="充值金额（USD）"
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
                      <h4>收款银行信息</h4>
                      <p>收款银行名称：Pacific Private Bank</p>
                      <p>收款银行地址：1st floor, Govant Building, 278 Kumul Hwy, Port Vila</p>
                      <p>SWIFT：PPBLVUVUXXX</p>
                      <h4>收款人信息</h4>
                      <p>收款人名称： Autu Securities International Inc. – Client Account</p>
                      <p>收款人账号： 6550-1-80008</p>
                      <p>收款人货币： USD</p>
                      <p>收款人地址： Law Partners House, Po Box 212, Port Vila, Vanuatu</p>
                      <p>备注： 你的名字的拼音</p>
                    </CardContent>
                  </Card>
                ) : null
              }
              {
                channel === 'digitalCurrency' ? (
                  <>
                    <p className='mt-2 text-base text-gray-500'>*支付币种</p>
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
                        <Card sx={{ width: 280, my: 2 }} variant="outlined">
                          <CardContent>
                            <img width={240} src={payType.barcode} />
                          </CardContent>
                        </Card>
                      ) : null
                    }
                  </>
                ) : null
              }
              <Box>
                <p className='my-2 text-base text-gray-500'>上传支付凭证</p>
                <IconButton className='w-72 h-36 border border-gray-400 bg-gray-100' aria-label="upload picture" sx={{borderRadius: '10px'}} component="label">
                  <input hidden accept="image/*" type="file" onChange={e => onChange(e.target.files[0], 0)} />
                  {!userPayImg && <PhotoCamera fontSize='large' />}
                  {userPayImg && <img className='w-full h-full' src={userPayImg} />}
                </IconButton>
              </Box>

              <LoadingButton
                className={`mt-12 ${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={!amount || (!payType && channel === 'digitalCurrency')}
                sx={{ py: 1.5, borderRadius: 6, width: 350 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                提交
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
