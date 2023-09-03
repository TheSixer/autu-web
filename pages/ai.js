import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import ChatGPT from "../components/ChatGPT";
import Footer from "../components/Footer";

// export const getStaticProps = async () => {
  
//   const res = await queryUserInfo();
//   // 也可以直接返回 404 页面
//   if (!res) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     // 在组件 props 中 可以拿到 data
//     props: res,
//   }
// }

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Securities">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top border-white"
      />
      <ChatGPT />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
