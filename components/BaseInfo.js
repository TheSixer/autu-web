import React, { useState, useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import countryTelData  from 'country-telephone-data';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import InputBase from '@mui/material/InputBase';
import { useThrottleFn } from 'ahooks';
import { saveBaseInfo } from '@/services';
import { FormattedMessage, useIntl } from "react-intl";

export default function CustomizedSteppers({ next }) {
  const [loading, setLoading] = useState(false);
  const [nationality, setNationality] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [exPhone, setExPhone] = useState('86');
  const intl = useIntl();

  const firstNameTxt = intl.formatMessage({ id: "imorove.step.baseInfo.firstName" });
  const lastNameTxt = intl.formatMessage({ id: "imorove.step.baseInfo.lastName" });
  const nationalityTxt = intl.formatMessage({ id: "imorove.step.baseInfo.nationality" });
  const birthdayTxt = intl.formatMessage({ id: "imorove.step.baseInfo.birthday" });
  const phoneTxt = intl.formatMessage({ id: "imorove.step.baseInfo.phone" });

  const {
    run: handleNext,
  } = useThrottleFn(async () => {
    setLoading(true);
    const {code} = await saveBaseInfo({
      firstName,
      lastName,
      birthDate,
      nationality,
      phone: exPhone + phone,
    });
    setLoading(false);
    if (!code) {
      next();
    }
  });

  const allCountries = useMemo(() => {
    const obj = countryTelData.allCountries.find(({iso2}) => iso2 === 'cn');
    const list = countryTelData.allCountries.filter(({iso2}) => iso2 !== 'cn');
    if (obj) {
      list.unshift(obj);
    }
    return list
  }, [])

  return (
    <>
      <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2} className="p-4">
            <FormControl fullWidth>
              <TextField id="outlined-basic" label={firstNameTxt} value={firstName} variant="outlined" onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label={lastNameTxt} value={lastName} variant="outlined" onChange={e => setLastName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label={birthdayTxt} onChange={value => setBirthDate(dayjs(value).format('YYYY-MM-DD HH:mm:ss'))} disableFuture />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"><FormattedMessage id="imorove.step.baseInfo.nationality" /></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nationality}
                label={nationalityTxt}
                onChange={e => setNationality(e.target.value)}
              >
                {
                  allCountries.map(({name, iso2}) => <MenuItem value={iso2} key={iso2}>{name}</MenuItem>)
                }
              </Select>
            </FormControl>
            <Paper
              component="form"
              variant="outlined"
              className='border-gray-400'
              sx={{ display: 'flex', alignItems: 'center', p: 1.5 }}
            >
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                className='border-none'
                sx={{ width: 92, borderColor: 'rgba(0,0,0,0)' }}
                labelId="tel"
                id="tel"
                value={exPhone}
                onChange={e => setExPhone(e.target.value)}
                variant="standard"
              >
                {
                  allCountries.map(({dialCode, iso2}) => <MenuItem value={dialCode} key={iso2}>+{dialCode}</MenuItem>)
                }
              </Select>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={phoneTxt}
                value={phone}
                inputProps={{ 'aria-label': phoneTxt }}
                onChange={e => setPhone(e.target.value)}
              />
            </Paper>

            <Button
              className='mt-4 bg-blue-900'
              sx={{ py: 1.5 }}
              variant="contained"
              disabled={!firstName || !lastName || !birthDate || !nationality || !phone}
              onClick={handleNext}>
              <FormattedMessage id="imorove.step.next" />
            </Button>

          </Stack>
        </CardContent>
      </Card>
    </>
  );
}