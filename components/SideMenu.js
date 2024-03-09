import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Handyman from '@mui/icons-material/Handyman';
import LiveTv from '@mui/icons-material/LiveTv';
import Newspaper from '@mui/icons-material/Newspaper';
import WalletIcon from '@mui/icons-material/Wallet';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupIcon from '@mui/icons-material/Group';
import Info from '@mui/icons-material/Info';
import Storefront from '@mui/icons-material/Storefront';
import Translate from '@mui/icons-material/Translate';
import { FormattedMessage, useIntl } from "react-intl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {signOut} from "next-auth/react"

const SideMenu = (props) => {
  const { isLogin } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  const { pathname, locale } = useRouter();
  const intl = useIntl();

  const home = intl.formatMessage({ id: "head.menu.home" });
  const tools = intl.formatMessage({ id: "head.menu.tools" });
  const market = intl.formatMessage({ id: "head.menu.market" });
  const live = intl.formatMessage({ id: "head.menu.live" });
  const news = intl.formatMessage({ id: "head.menu.news" });
  const about = intl.formatMessage({ id: "head.menu.about" });
  const ai = intl.formatMessage({ id: "head.menu.ai" });

  const walletTxt = intl.formatMessage({ id: "mine.index.personal.wallet" });
  const myAccount = intl.formatMessage({ id: "mine.account" });
  const auditRecords = intl.formatMessage({ id: "audit.records" });

  const navigate = (locale) => {
    window.location.href = `${window.location.origin}${locale === 'zh' ? '/zh' : ''}/${pathname}`;
  };

  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={props.toggleDrawer}
    >
      {
        isLogin ? (
          <List>
            <ListItem>
              <ListItemButton onClick={() => router.push('/personal-center')}>
                <ListItemIcon>
                  <WalletIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary={walletTxt} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => router.push('/personal-center/accounts')}>
                <ListItemIcon>
                  <GroupIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary={myAccount} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => router.push('/personal-center/approval-records')}>
                <ListItemIcon>
                  <VerifiedUserIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary={auditRecords} />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <Stack direction="row" spacing={2} sx={{ px:4, py: 2 }}>
            <Button className='bg-orange-400' variant="contained" color="warning" onClick={() => (window.location.href = 'https://www.autubackend.com/login')}>登录</Button>
            <Button variant="outlined" color="warning" onClick={() => (window.location.href = 'https://www.autubackend.com/register/trader')}>注册</Button>
          </Stack>
        )
      }
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon>
              <Home sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={home} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/market')}>
            <ListItemIcon>
              <Storefront sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={market} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/tools')}>
            <ListItemIcon>
              <Handyman sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={tools} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/promotion')}>
            <ListItemIcon>
              <LiveTv sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={live} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/ai')}>
            <ListItemIcon>
              <Newspaper sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={ai} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/about')}>
            <ListItemIcon>
              <Info sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={about} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Translate />
            </ListItemIcon>
            <ListItemText primary={locale === 'en' ? '中文' : 'English'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {router.locales.sort().map((locale) => (
          <MenuItem key={locale} onClick={() => navigate(locale)}>
            {locale === 'en' ? 'English' : '中文'}
          </MenuItem>
          ))}
      </Menu>
      {
        isLogin ? (
          <>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton>
                  <Button variant="outlined" color="warning" onClick={signOut}>
                    <FormattedMessage id="head.menu.signOut" />
                  </Button>
                </ListItemButton>
              </ListItem>
            </List>
          </>
        ) : null
      }
    </Box>
  );
}

export default SideMenu;
