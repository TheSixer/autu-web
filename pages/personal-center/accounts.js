import Layout from "@/components/PersonalCenterLayout";
import AccountList from "@/components/AccountList";
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { useEffect, useState } from "react";
import { fetchWallet } from '@/services';
import { FormattedMessage } from "react-intl";

export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(context.req, context.res, authOptions)
  // const response = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
  //   headers: { token: session.user.accessToken }
  // });
  // const { data: { completeVerify } } = await response.json();
  const response = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/exchange/rate/list', {
    headers: { token: session.user.accessToken }
  });
  const { code, data: rate } = await response.json();

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
      rate
    },
  }
}

const HomePage = ({ rate }) => {
  const router = useRouter();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = () => {
    fetchWallet()
      .then(({code, data}) => {
        console.log(data)
        if (!code) {
          setBalance(data?.balance || 0);
        }
      })
  }

  return (
    <Layout>
  
      <div className="container p-8">
        <div className="mb-10">
          <h4 className="text-black font-semibold"><FormattedMessage id="account.management" /></h4>
        </div>

        <AccountList balance={balance} rate={rate} onUpdate={fetchBalance} />

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Button
            sx={{ width: 288, py: 1.5, borderRadius: 6 }}
            variant="outlined"
            size="large"
            startIcon={<Add />}
            onClick={() => router.push('/personal-center/create')}
          >
            <FormattedMessage id="account.create" />
          </Button>
        </Stack>
      </div>
  
    </Layout>
  );
};

export default HomePage;
