import { useState, useRef } from 'react';
import Link from "next/link";
import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { useThrottleFn } from 'ahooks';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { saveCardPic, getImgUrl } from '@/services';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { FormattedMessage, useIntl } from "react-intl";

export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(context.req, context.res, authOptions)
  const res = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
    headers: { token: session.user.accessToken }
  });
  const { code, data } = await res.json();
  const resp = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/oss/verify/policy', {
    headers: { token: session.user.accessToken }
  });
  const { data: policy } = await resp.json();

  if (code) {
    return {
      redirect: {
        permanent: false,
        destination: '/personal-center',
      }
    }
  }

  return {
    // 在组件 props 中 可以拿到 data
    props: {
      userInfo: data,
      policy
    },
  }
}

const HomePage = ({userInfo, policy}) => {
  const { idCardInfo } = userInfo;
  const [loading, setLoading] = useState(false);
  const [frontPhotoUrl, setFrontPhotoUrl] = useState('');
  const [backendPhotoUrl, setBackendPhotoUrl] = useState('');
  const [frontPhoto, setFrontPhoto] = useState('');
  const [backendPhoto, setBackendPhoto] = useState('');
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const intl = useIntl();

  const noUploadTxt = intl.formatMessage({ id: "verify.noUpload" });
  const waitingAduitTxt = intl.formatMessage({ id: "verify.waiting.aduit" });
  const underReviewTxt = intl.formatMessage({ id: "mine.index.personal.underReview" });
  const passedTxt = intl.formatMessage({ id: "mine.index.personal.passed" });
  const rejectedTxt = intl.formatMessage({ id: "mine.index.personal.rejected" });
  const realnameTxt = intl.formatMessage({ id: "mine.index.personal.realname" });
  
  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    setLoading(true);
    saveCardPic({
      frontPhotoUrl,
      backendPhotoUrl,
      name: userName
    }).then(({code}) => {
      if (!code) {
        toast.success(waitingAduitTxt, {
          autoClose: 2000,
          onClose: () => router.push('/personal-center')
        });
      }
    });
  });

  const onChange = (file, id) => {
    uploadImg(policy, file, id);
  }

  const uploadImg = (params, file, id) => {
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
    }).then(res => {
      !id ? setFrontPhotoUrl(`${params.dir}/${file.name}`) : setBackendPhotoUrl(`${params.dir}/${file.name}`);
      fetchImg(`${params.dir}/${file.name}`, id);
    })
  }

  const fetchImg = async (url, id) => {
    const { code, data } = await getImgUrl(url);
    if (!code) {
      !id ? setFrontPhoto(data) : setBackendPhoto(data);
    }
  }

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8 sm:mb-20">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span><FormattedMessage id='head.menu.back' /></span>
          </Link>
        </div>
        <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
          <CardContent>
            <Box className="p-4">
              <h4 className='text-black font-semibold'><FormattedMessage id='verify.userInfo' />&nbsp;&nbsp;
              <Chip size='small' label={idCardInfo?.auditStatus === 0 ? underReviewTxt : idCardInfo?.auditStatus === 1 ? passedTxt : idCardInfo?.auditStatus === 2 ? rejectedTxt : noUploadTxt} color="success" variant="outlined" /></h4>
              <p className='mt-2 mb-4 text-sm text-gray-500'><FormattedMessage id='verify.provideTxt' /></p>

              <IconButton className='w-full h-36 border border-gray-400 bg-gray-100' aria-label="upload picture" sx={{borderRadius: '10px'}} component="label">
                <input hidden accept="image/*" type="file" onChange={e => onChange(e.target.files[0], 0)} />
                {!frontPhoto && <PhotoCamera fontSize='large' />}
                {frontPhoto && <img className='w-full h-full' src={frontPhoto} />}
              </IconButton>
              <IconButton className='w-full h-36 border border-gray-400 bg-gray-100' aria-label="upload picture" sx={{my: 4, borderRadius: '10px'}} component="label">
                <input hidden accept="image/*" type="file" onChange={e => onChange(e.target.files[0], 1)} />
                {!backendPhoto && <PhotoCamera fontSize='large' />}
                {backendPhoto && <img className='w-full h-full' src={backendPhoto} />}
              </IconButton>

              <TextField
                label={realnameTxt}
                value={userName}
                onChange={e => setUserName(e.target.value)}
                fullWidth
              />

              <LoadingButton
                className={`${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={!frontPhotoUrl || !backendPhotoUrl || !userName}
                sx={{ mt: 4, py: 1.5, borderRadius: 6 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                <FormattedMessage id='mine.index.submit' />
              </LoadingButton>

            </Box>
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
}

export default HomePage;
