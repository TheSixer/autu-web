import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Conditions from "../components/Conditions";

const Privacypolicy = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Securities">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Conditions />
      <Footer />
    </Layout>
  </div>
);

export default Privacypolicy;
