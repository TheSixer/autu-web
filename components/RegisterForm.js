import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormattedMessage, useIntl } from "react-intl";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from "next/link";
import { register } from '@/services';
import { useThrottleFn } from 'ahooks';
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassward] = useState('');
  const intl = useIntl();

  const enterEmail = intl.formatMessage({ id: "login.enter.email" });
  const enterPwd = intl.formatMessage({ id: "login.enter.password" });
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    register({
      email,
      password
    }).then(({code}) => {
      !code && setStatus(1);
    });
  });

  return (
    <section className="login-form w-screen h-screen bg-scroll bg-center bg-cover">
      <div className="container flex items-center justify-center h-full">
      <Card className="mx-auto w-96">
        <CardContent>
          <div className="login-form-header px-10">
            <div className="login-form-header-title mb-9">
              <h4 className="text-lg font-bold"><FormattedMessage id="register.title" /></h4>
            </div>
            <img className="login-form-logo mx-auto" src="/assets/images/Autu-Securities@2x.png" />
          </div>

          {
            !status ? (
              <form className="bg-white p-6 sm:p-10 pb-0 rounded-md" noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  value={email}
                  label={enterEmail}
                  margin="normal"
                  variant="outlined"
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />

                <TextField
                  className="mb-0"
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  id="outlined-error"
                  label={enterPwd}
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={e => setPassward(e.target.value)}
                  fullWidth
                />
                <Button disabled={!email || !password} className="w-full py-2 bg-blue-900" sx={{ mt: 6, borderRadius: '20px' }} variant="contained" onClick={handleSubmit}><FormattedMessage id="register.title" /></Button>
                <p className="text-sm text-gray-400 m-6 text-center"><FormattedMessage id="register.hasAccount" /><Link className="text-blue-600" href="/login"><FormattedMessage id="login.title" /></Link></p>
              </form>
            ) : (
              <>
                <img className="mx-auto my-4" src="/assets/images/finish@2x.png" width={128} />
                <p className="text-base text-black text-center"><FormattedMessage id="register.success" /></p>
                <Button className="w-full py-2 rounded-3xl" sx={{ my: 4 }} variant="outlined" onClick={() => router.push('/login')}><FormattedMessage id="register.toLogin" /></Button>
              </>
            )
          }
        </CardContent>
      </Card>
      </div>
    </section>
  );
};

export default LoginForm;
