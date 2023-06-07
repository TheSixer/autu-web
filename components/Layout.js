import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { animation } from '../utils';
import { ToastContainer } from 'react-toastify';

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { locale } = useRouter();

  useEffect(() => {
    try {
      localStorage.setItem('_lang', locale)
    } catch (error) {}
  }, [])

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div id="home">
      <Head>
        <meta property="og:title" content="Autu Securities | 澳图证券：智能化时代全球领先的互联网券商" /> 
        <meta property="og:description" content="提供便捷的全球金融资产投资通道，可在线交易港美股、股指、期货、黄金、原油、加密资产CFD和货币对等" /> 
        <meta property="og:image" content="https://www.autu.finance/assets/images/banner01@2x.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" itemProp="description" content="提供便捷的全球金融资产投资通道，可在线交易港美股、股指、期货、黄金、原油、加密资产CFD和货币对等" />
        <meta itemProp="name" content="Autu Securities | 澳图证券：智能化时代全球领先的互联网券商" />
        <meta name="keywords" content="美股,港股,中概股,期货,股指,加密货币,外汇,衍生品,黄金,原油,澳图证券,澳图,autu,autu securities, 澳图期货" />
        <meta itemProp="image" content="https://www.autu.finance/assets/images/banner01@2x.jpg"></meta>
        {/* {
          process.env.NODE_ENV === 'production' ? (
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          ) : null
        } */}
        <title>{props.pageTitle}</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="page-wrapper">{props.children}</div>

      {scrollTop === true ? (
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </div>
  );
};

export default Layout;
