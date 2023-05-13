import { useState } from 'react';
import Link from "next/link";
import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useThrottleFn } from 'ahooks';
import { createAccount } from '@/services';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { FormattedMessage, useIntl } from "react-intl";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [leverageInCents, setLeverageInCents] = useState(100);
  const [depositCurrency, setDepositCurrency] = useState('USD');
  const router = useRouter();
  const intl = useIntl();

  const backTxt = intl.formatMessage({ id: "head.menu.back" });
  const successTxt = intl.formatMessage({ id: "create.account.success" });
  const platformTxt = intl.formatMessage({ id: "create.account.platform" });
  const typeTxt = intl.formatMessage({ id: "create.account.type" });
  const leverTxt = intl.formatMessage({ id: "lever" });
  const currencyTxt = intl.formatMessage({ id: "create.account.currency" });
  const dollarTxt = intl.formatMessage({ id: "create.account.dollar" });
  const rmbTxt = intl.formatMessage({ id: "create.account.rmb" });
  
  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    setLoading(true);
    createAccount({
      accountType: 'HEDGED',
      leverageInCents,
      depositCurrency
    }).then(({code}) => {
      if (!code) {
        toast.success(successTxt, {
          autoClose: 1000,
          onClose: () => router.push('/personal-center/accounts')
        });
      } else { 
        setLoading(false);
      }
    });
  });

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8 sm:mb-20">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span>{backTxt}</span>
          </Link>
        </div>
        <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <h4 className='text-black font-semibold'><FormattedMessage id='account.create' /></h4>
              <p className='mt-2 mb-4 text-sm text-gray-500'><FormattedMessage id='create.account.trading' /></p>
              <FormControl fullWidth>
                <TextField
                  label={platformTxt}
                  id="outlined-start-adornment"
                  defaultValue="cTrader"
                  InputProps={{
                    readOnly: true,
                    startAdornment: <InputAdornment sx={{ width: 150 }} position="start">{platformTxt}</InputAdornment>,
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label={typeTxt}
                  id="outlined-start-adornment"
                  defaultValue="Hedging"
                  InputProps={{
                    readOnly: true,
                    startAdornment: <InputAdornment sx={{ width: 150 }} position="start">{typeTxt}</InputAdornment>,
                  }}
                />
              </FormControl>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">{leverTxt}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={leverageInCents}
                  label={leverTxt}
                  onChange={(e) => setLeverageInCents(e.target.value)}
                >
                  <MenuItem value={100}>1 : 1</MenuItem>
                  <MenuItem value={1000}>1 : 10</MenuItem>
                  <MenuItem value={5000}>1 : 50</MenuItem>
                  <MenuItem value={10000}>1 : 100</MenuItem>
                  <MenuItem value={20000}>1 : 200</MenuItem>
                  <MenuItem value={50000}>1 : 500</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-simple-select-label">{currencyTxt}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={depositCurrency}
                  label={currencyTxt}
                  onChange={(e) => setDepositCurrency(e.target.value)}
                >
                  <MenuItem value={'USD'}>USD（{dollarTxt}）</MenuItem>
                  <MenuItem value={'CNH'}>CNH（{rmbTxt}）</MenuItem>
                  {/* <MenuItem value={'AUD'}>AUD</MenuItem>
                  <MenuItem value={'CHF'}>CHF</MenuItem>
                  <MenuItem value={'EUR'}>EUR</MenuItem>
                  <MenuItem value={'GBP'}>GBP</MenuItem>
                  <MenuItem value={'JPY'}>JPY</MenuItem>
                  <MenuItem value={'PLN'}>PLN</MenuItem>
                  <MenuItem value={'ZAR'}>ZAR</MenuItem> */}
                </Select>
              </FormControl>

              <LoadingButton
                className={`mt-12 ${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={!leverageInCents || !leverageInCents}
                sx={{ py: 1.5, borderRadius: 6 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                <FormattedMessage id='mine.index.submit' />
              </LoadingButton>

            </Stack>
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
}

export default HomePage;
