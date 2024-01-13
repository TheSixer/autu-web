import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { FormattedMessage } from "react-intl";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useSession, signOut} from "next-auth/react"
import { useRouter } from "next/router";
import { deepPurple } from '@mui/material/colors';
import Link from "next/link";

const HeaderHome = (props) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [sticky, setSticky] = useState(false);
  const [isShowDrawer, setIsShowDrawer] = useState();
  const { data: session } = useSession();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => setIsShowDrawer(!isShowDrawer);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header-one stricky bg-black ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="py-2 sm:py-5 container-fluid">
        <div className="site-header-one__logo flex items-center">
          <a href="/">
            {
              props.thime === 'white' ? 
              <img src="/assets/images/Autu-Securities@2x.png" width="258" alt="" />
              : <img src="/assets/images/logo@2x.png" width="258" alt="" />
            }
          </a>
          <div className="ml-2 block laptop:hidden">
            <IconButton onClick={toggleDrawer}>
              <MenuIcon fontSize="large" sx={{ color: '#FFD936' }} />
            </IconButton>
          </div>
        </div>
        <div className="main-nav__right">
          <div className="main-nav__main-navigation">
            <NavLinks />
          </div>
          {
            !session?.user ? (
              <>
                <Link href="https://www.autubackend.com/register/trader" className={`thm-btn ${props.btnClass} active`}>
                  <span><FormattedMessage id="head.menu.newAccount" /></span>
                </Link>
                <Link href="https://www.autubackend.com/login" className={`thm-btn ${props.btnClass}`}>
                  <span><FormattedMessage id="head.menu.signIn" /></span>
                </Link>
              </>
            ) : (
              <Stack sx={{ ml: 2, cursor: 'pointer' }} direction="row" alignItems="center" spacing={1} onClick={handleClick}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: deepPurple[500] }}>
                  { session?.user?.name.slice(0, 1) }
                </Avatar>
                <Typography variant="button">
                  { session?.user?.name }
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem sx={{ width: 160 }} onClick={() => router.push('/personal-center')}>
                    <span className="text-base"><FormattedMessage id="mine.index.personal.info" /></span>
                  </MenuItem>
                  <MenuItem sx={{ width: 160 }} onClick={() => router.push('/personal-center/verify')}>
                    <span className="text-base"><FormattedMessage id="mine.index.personal.verify" /></span>
                  </MenuItem>
                  <MenuItem sx={{ width: 160 }} onClick={signOut}>
                    <span className="text-base"><FormattedMessage id="head.menu.signOut" /></span>
                  </MenuItem>
                </Menu>
              </Stack>
            )
          }
        </div>
      </div>
      <Drawer
        anchor="left"
        open={isShowDrawer}
        onClose={toggleDrawer}
      >
        <SideMenu isLogin={!!session?.user} toggleDrawer={toggleDrawer} />
      </Drawer>
    </header>
  );
};

export default HeaderHome;
