import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FuturesAndSpot from "../components/FuturesAndSpot";
import GlobalInvest from "../components/GlobalInvest";
import MarketBanner from "../components/MarketBanner";
import GlobalMarket from "../components/GlobalMarket";
import Cryptographic from "../components/Cryptographic";
import MonetaryTransaction from "../components/MonetaryTransaction";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Securities">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MarketBanner />
      <GlobalMarket />
      <GlobalInvest />
      <FuturesAndSpot />
      <Cryptographic />
      <MonetaryTransaction />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
