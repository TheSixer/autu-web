import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jurisdiction from "../components/Jurisdiction";

const Privacypolicy = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Securities">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Jurisdiction />
      <Footer />
    </Layout>
  </div>
);

export default Privacypolicy;