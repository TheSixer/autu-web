import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MarketBanner = () => {
  const { locale } = useRouter();
  const [value, setValue] = React.useState("one");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="tools-banner py-28 lg:py-48 md:py-40 sm:py-20">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="tools-banner-content wow fadeInDown">
              <h4 className="tools-banner-title text-xl md:text-2xl lg:text-3xl">
                <FormattedMessage id="tools.banner.title" />
              </h4>
              <p className="tools-banner-sub_title text-base sm:text-lg md:text-xl lg:text-2xl">
                <FormattedMessage id="tools.banner.subtitle" />
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="tools-banner-content wow fadeInDown">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                centered
                sx={{
                  "& .MuiTab-root": {
                    color: "#fff", 
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&.Mui-selected": {
                      color: "#FFD700",
                    },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#FFD700",
                  },
                }}
              >
                <Tab value="one" label="cTrader" />
                <Tab value="two" label="MT5" />
              </Tabs>
            </div>
          </Col>
          <Col md={5} className="d-flex">
            {value === "one" ? (
              <div className="tools-banner-grid wow fadeInLeft">
                <a
                  href="https://getctrader.com/autu/ctrader-autu-setup.exe"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/windows@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.windows" />
                  </span>
                </a>
                <a
                  href="https://app.autu.finance"
                  target="_blank"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/website@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.web" />
                  </span>
                </a>
                <a
                  href="https://autup.s3.ap-southeast-1.amazonaws.com/AutucTrader.apk"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/android@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.android" />
                  </span>
                </a>
                <a
                  href={
                    locale === "en"
                      ? "https://apps.apple.com/cy/app/ctrader/id767428811"
                      : "https://apps.apple.com/cn/app/ctrader-cn/id6447500914"
                  }
                  target="_blank"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/iphone@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.ios" />
                  </span>
                </a>
                <a
                  href="https://getctradermac.com/autu/ctrader-autu-setup.dmg"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/mac@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.mac" />
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.autu.app"
                  target="_blank"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/google@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.google" />
                  </span>
                </a>
              </div>
            ) : (
              <div className="tools-banner-grid wow fadeInLeft">
                <a
                  href="https://download.mql5.com/cdn/web/autu.securities.international/mt5/autusecurities5setup.exe"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/windows@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.windows" />
                  </span>
                </a>
                <a
                  href="https://download.mql5.com/cdn/mobile/mt5/ios?server=AutuSecurities-Trade"
                  target="_blank"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/iphone@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.ios" />
                  </span>
                </a>
                <a
                  href="https://download.mql5.com/cdn/mobile/mt5/android?server=AutuSecurities-Trade"
                  target="_blank"
                  className="tools-banner-grid-item"
                >
                  <img src="/assets/images/tools/google@2x.png" />
                  <span>
                    <FormattedMessage id="tools.banner.google" />
                  </span>
                </a>
              </div>
            )}
          </Col>
          <Col md={7} className="d-flex mt-8 md:mt-0">
            <div className="tools-banner-image wow fadeInRight">
              <img src="/assets/images/tools/versions@2x.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
