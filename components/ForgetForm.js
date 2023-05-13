import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useThrottleFn } from 'ahooks';
import { forgetPassward } from '@/services';
import { FormattedMessage, useIntl } from "react-intl";
import Typography from '@mui/material/Typography';

const ForgetForm = () => {
  const [status, setStatus] = useState(0);
  const [userName, setUserName] = useState('');
  const intl = useIntl();

  const enterEmail = intl.formatMessage({ id: "login.enter.email" });

  const {
    run: handleSubmit,
  } = useThrottleFn(async () => {
    const { code } = await forgetPassward(userName);
    if (!code) {
      setStatus(1);
    }
  });

  return (
    <section className="login-form w-screen h-screen bg-scroll bg-center bg-cover">
      <div className="container flex items-center justify-center h-full">
        <Card className={`mx-auto ${status ? 'w-3/5 p-4' : 'w-96'} `}>
          <CardContent>
            {
              !status ? (
                <>
                  <div className="login-form-header px-10">
                    <div className="login-form-header-title mb-9">
                      <h4 className="text-lg font-bold"><FormattedMessage id="forget.title" /></h4>
                    </div>
                    <img className="login-form-logo mx-auto" src="/assets/images/Autu-Securities@2x.png" />
                  </div>
                  <form className="bg-white p-6 sm:p-10 pb-6 rounded-md" noValidate autoComplete="off">
                    <TextField
                      name="email"
                      id="outlined-name"
                      label={enterEmail}
                      margin="normal"
                      variant="outlined"
                      onChange={e => setUserName(e.target.value)}
                      fullWidth
                    />

                    <Button onClick={handleSubmit} className="w-full mt-10 py-2 bg-blue-900 rounded-3xl" variant="contained"><FormattedMessage id="forget.sendEmial" /></Button>
                  </form>
                </>
              ) : (
                <Typography variant="subtitle1" gutterBottom>
                  <FormattedMessage id="forget.tips" />
                </Typography>
              )
            }
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForgetForm;
