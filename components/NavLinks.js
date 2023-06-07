import React, { useState } from "react";
import Link from "next/link";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const route = useRouter();
  const { pathname, locale, locales } = useRouter();
  const intl = useIntl();

  const home = intl.formatMessage({ id: "head.menu.home" });
  const tools = intl.formatMessage({ id: "head.menu.tools" });
  const market = intl.formatMessage({ id: "head.menu.market" });
  const live = intl.formatMessage({ id: "head.menu.live" });
  const news = intl.formatMessage({ id: "head.menu.news" });
  const about = intl.formatMessage({ id: "head.menu.about" });
  const ai = intl.formatMessage({ id: "head.menu.ai" });
  
  const navigate = (locale) => {
    window.location.href = `${window.location.origin}${locale === 'zh' ? '/zh' : ''}/${pathname}`;
  };

  return (
    <ul className="main-nav__navigation-box">
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/home' ? 'active' : ''}`}>
        <Link prefetch={false} href="/home">
          {home}
        </Link>
      </li>
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/market' ? 'active' : ''}`}>
        <Link prefetch={false} href="/market">
          {market}
        </Link>
      </li>
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/tools' ? 'active' : ''}`}>
        <Link prefetch={false} href="/tools">
          {tools}
        </Link>
      </li>
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/promotion' ? 'active' : ''}`}>
        <Link prefetch={false} href="/promotion">
          {live}
        </Link>
      </li>
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/ai' ? 'active' : ''}`}>
        <Link prefetch={false} href="/ai">
          {ai}
        </Link>
      </li>
      <li className={`laptop:px-1.5 mxl:px-4 ${route.pathname === '/about' ? 'active' : ''}`}>
        <Link prefetch={false} href="/about">
          {about}
        </Link>
      </li>
      <li className="laptop:px-1.5 mxl:px-4 dropdown language">
        <span className="text-gray-50 hover:text-black">
          <>
            {locale === 'en' ? '中文' : 'English'}
            <i className="fa fa-angle-down ml-2" onClick={handleDropdownStatus}></i>
          </>
        </span>
        <ul className={dropdownStatus === true ? "active" : null}>
          {[...locales].sort().map((locale) => (
            <li key={locale}>
              <span onClick={() => navigate(locale)}>
                {locale === 'en' ? 'English' : '中文'}
              </span>
            </li>
          ))}
          {/* <li>
            <Link href="/blog">
              English
            </Link>
          </li>
          <li>
            <Link href="/">
              中文
            </Link>
          </li> */}
        </ul>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link href="/blog">
          <>
            News
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              News
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              News Details
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
