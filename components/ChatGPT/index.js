import React, { useState, useEffect, useRef, Fragment } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useRouter } from "next/router";
import hljs from 'highlight.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesIcon from '@mui/icons-material/Devices';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';

import "highlight.js/styles/monokai-sublime.css";
import chatgptImg from './chatgpt.svg';

import styles from './index.module.css';
import Image from 'next/image';

function generate(element, list) {
  return list.map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let md = require('markdown-it')({
  highlight: function (str) {
    return hljs.highlightAuto(str).value;
  }
});

const solutions = [
  '帮我基于ctrader cBot的程序代码实现一个经典网格策略',
  '基于ctrader cBot的程序代码帮我实现一个马丁格尔策略',
  '用基于ctrader cBot的程序代码实现一个能卖在更高点的追踪卖出策略',
  '我想要基于ctrader Automate 的自动交易程序代码实现一个使用布林带的策略',
  '能帮我基于ctrader cBot的程序代码实现抓区间突破的策略吗？',
  '用基于ctrader Automate 的自动交易程序代码帮我实现一个Ichimoku策略',
  '基于ctrader cBot的程序代码实现一个基于123法则进场的策略',
  '我想基于ctrader Automate 的自动交易程序代码实现一个追涨的动量策略',
  '我要用基于ctrader cBot的程序代码实现一个 RSI 超买超卖策略',
];

const solutionsEn = [
  "Help me implement a classic grid strategy based on cTrader cBot program code.",
  "Help me implement a Martingale strategy based on cTrader cBot program code.",
  "Implement a trailing sell strategy to sell at a higher point based on cTrader cBot program code.",
  "Implement a Bollinger Bands strategy using cTrader Automate code.",
  "Help me implement a range breakout strategy based on cTrader cBot program code.",
  "Implement an Ichimoku strategy using automated trading program code based on cTrader Automate.",
  "Implement an entry strategy based on the 123 rule using cTrader cBot program code.",
  "Implement a momentum strategy to chase gains using cTrader Automate code.",
  "I need to implement an RSI overbought/oversold strategy based on cTrader cBot program code."
];

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [value, useValue] = useState('');
  const [isContent, useIsContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chat = useRef(null);
  const index = useRef(0);
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState([]);
  const [text, setText] = useState('');

  const { locale } = useRouter();

  const steps = [
    {
      title: locale !== 'en' ? '自定义策略' : 'Custom Strategy',
      description: locale !== 'en' ? '向 AutuGPT 描述您的策略' : 'Describe your strategy to AutuGPT',
      status: 'process',
      icon: <Avatar sx={{ width: 36, height: 36, backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)' }}>
        <TerminalIcon fontSize="small" />
      </Avatar>,
    },
    {
      title: locale !== 'en' ? '在 CTrader 上进行回测' : 'Backtest on cTrader',
      description: locale !== 'en' ? '在 CTrader 上进行回测并优化参数' : 'Backtest and optimize parameters on cTrader',
      status: 'process',
      icon: <Avatar sx={{ width: 36, height: 36, backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)' }}>
        <DevicesIcon fontSize="small" />
      </Avatar>,
    },
    {
      title: locale !== 'en' ? '在 CTrader 上自动化' : 'Automate on cTrader',
      description: locale !== 'en' ? '使用 CTrader 信号机器人自动执行' : 'Use cTrader Signal Robot for automated execution',
      status: 'process',
      icon: <Avatar sx={{ width: 36, height: 36, backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)', cursor: 'pointer' }}
        onClick={() => window.open('https://www.autubackend.com/register/trader', '_blank')}>
        <AutoModeIcon fontSize="small" />
      </Avatar>,
    },
  ];

  const scrollToBottom = () => {
    if(chat.current.scrollHeight > chat.current.clientHeight){
      setTimeout(() => {
        chat.current.scrollTop = chat.current.scrollHeight;
      }, 100);
    }
  };

  const submit = async (val) => {
    if (!val || isLoading) {
      return
    }
    if (text?.length > 0) {
      setMessageList((pre) => [...pre, {
        role: 1,
        content: md.render(text),
      }]);
      setText('')
    }
    setIsLoading(true)
    setQuestions([...questions, val.trim()])
    const prompts = [...prompt, { role: 'user', content: val.trim() }]
    setPrompt(prompts);
    useValue('')
    scrollToBottom();

    fetchEventSource(`${process.env.NEXT_PUBLIC_BASEAI_URL}/openai/completions/stream/pro/post`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ promote: JSON.stringify(prompts.slice(-10)) }),
      onmessage(e) {
        try {
          const data = e.data && JSON.parse(e.data)
          if (data.end) {
            setPrompt((pro) => [...pro, { role: 'assistant', content: md.render(text) }]);
            index.current += 1;
            setIsLoading(false)
          }
  
          if (!data.message) {
            return
          }
          setText((txt) => txt + data.message)
          scrollToBottom();
        } catch (e) {
  
        }
      },
      onerror() {
        
      }
    })
  }

  const handleInput = (e) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (e.target.value.trim() && !isContent) {
      useIsContent(true)
    }
    if (!e.target.value.trim()) {
      useIsContent(false)
    }
    if (e.target.value.length >= 250) {
      useValue(e.target.value.slice(0, 250))
    } else {
      useValue(e.target.value)
    }
  }

  const clear = () => {
    index.current = 0;
    setQuestions([])
    setMessageList([])
  }


	return (
		<section className="w-screen flex flex-row">
      <div className={`${styles.sidebar_scrollview} pt-32 h-screen px-4 border-r border-gray-300 overflow-y-scroll`}>
        <Steps
          className={styles.custom_step}
          direction="vertical"
          current={2}
          items={steps}
        />
      </div>

      <article ref={chat} className={'relative main px-4 pt-24 w-screen h-screen overflow-y-scroll'}>
        {
          !questions?.length ? (
            <div className={styles.empty_view}>
              <div className={`${styles.logo} flex justify-center flex-col items-center`}>
                <Image src={chatgptImg} alt='chatGPT' /> 
                <h2 className='mt-4 text-5xl font-bold text-gray-800 font-serif'>AutuGPT</h2>
              </div>
              <Grid container spacing={2}  sx={{ m: '60px auto' }} className="max-w-screen-md">
                {
                  (locale === 'en' ? solutionsEn : solutions).map((solute, index) => (
                    <Grid xs={12} sm={12} md={4} key={'solute_' + index}>
                      <Item variant="outlined" onClick={() => submit(solute)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 2, cursor: 'pointer', height: '100%' }} className="hover:border-yellow-300">
                        <span className='text-base text-gray-900'>{ solute }</span>
                        <ArrowRightAltIcon />
                      </Item>
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          ) : (
            <div className={styles.empty_view}>
              <List sx={{ width: '100%' }}>
                {
                  questions.map((question, index) => (
                    <>
                      <Divider />
                      <ListItem key={`me_${index}`}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', py: 2, mx: 'auto', width: '100%', maxWidth: 780 }}>
                          <ListItemAvatar>
                            <Avatar alt="LO" sx={{ bgcolor: '#9a3412' }} variant="rounded">LO</Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            secondary={
                              <Fragment>
                                <Typography
                                  className={styles.render__html}
                                  sx={{ display: 'inline', fontSize: '1rem', lineHeight: '1.75rem' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  <p dangerouslySetInnerHTML={{
                                    __html: question
                                  }}></p>
                                </Typography>
                              </Fragment>
                            }
                          />
                        </Box>
                      </ListItem>
                      {
                        messageList[index] ? (
                          <>
                            <Divider />
                            <ListItem sx={{ bgcolor: '#f7f7f8' }} key={`chat_${index}`}>
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', py: 2, mx: 'auto', width: '100%', maxWidth: 780 }}>
                                <ListItemAvatar>
                                  <Avatar alt="Cindy Baker" src="/assets/images/ai.jpeg" variant="rounded" />
                                </ListItemAvatar>
                                <ListItemText
                                  secondary={
                                    <Fragment>
                                      <Typography
                                        className={styles.render__html}
                                        sx={{ display: 'inline', fontSize: '1rem', lineHeight: '1.75rem' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                      >
                                        <p dangerouslySetInnerHTML={{
                                          __html: messageList[index].content
                                        }}></p>
                                      </Typography>
                                    </Fragment>
                                  }
                                />
                              </Box>
                            </ListItem>
                            {
                              index === messageList.length - 1 ? <Divider /> : null
                            }
                          </>
                        ) : null
                      }
                    </>
                  ))
                }
                {
                  text ? (
                    <>
                      <Divider />
                      <ListItem sx={{ bgcolor: '#f7f7f8' }} key={`chat_last`}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', py: 2, mx: 'auto', width: '100%', maxWidth: 780 }}>
                          <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/assets/images/ai.jpeg" variant="rounded" />
                          </ListItemAvatar>
                          <ListItemText
                            secondary={
                              <Fragment>
                                <Typography
                                  className={styles.render__html}
                                  sx={{ display: 'inline', fontSize: '1rem', lineHeight: '1.75rem' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  <p className={isLoading ? styles.print_sign : ''} dangerouslySetInnerHTML={{
                                    __html: md.render(text)
                                  }}></p>
                                </Typography>
                              </Fragment>
                            }
                          />
                        </Box>
                      </ListItem>
                      <Divider />
                    </>
                  ) : null
                }
              </List>
            </div>
          )
        }

        <div className={`${styles.enter_view} sticky flex items-center justify-center w-full h-40 bottom-0 left-0 px-4`}>
          <TextField
            value={value}
            label="请输入..."
            variant="outlined"
            onChange={handleInput}
            placeholder="请输入..."
            sx={{ width: '500px', bgcolor: 'white' }}
            onKeyUp={(e) => {
              if (e.keyCode === 13) submit(e.target.value || '');
            }}
            color="secondary"
            InputProps={{
              endAdornment: (
                <>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    color={value.length ? 'secondary' : 'default' }
                    sx={{ ml: '10px', p: '10px' }}
                    aria-label="add an alarm" size="large"
                    onClick={() => submit(value)}>
                    <SendIcon />
                  </IconButton>
                </>
              ),
            }}
          />
        </div>
          
        {/* <div className={'btnGroup'}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          
            {/* {
              !session?.user ? (
                <>
                  <Tooltip title="请先登录" placement="bottom-start">
                    <Button className="bg-yellow-500" sx={{ width: 120, mr: 4 }} variant="contained" color="warning">提交</Button>
                  </Tooltip>
                  <Tooltip title="请先登录" placement="bottom-start">
                    <Button variant="outlined" color="error" style={{ marginRight: '24px' }}>清空</Button>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Button disabled={isLoading} className="bg-yellow-500" sx={{ width: 120, mr: 4 }} variant="contained" color="warning" onClick={submit}>提交</Button>
                  <Button disabled={isLoading} variant="outlined" color="error" onClick={clear} style={{ marginRight: '24px' }}>清空</Button>
                </>
              )
            } */}
            {/* <Button disabled={isLoading} className="bg-yellow-500" sx={{ width: 120, mr: 4 }} variant="contained" color="warning" onClick={submit}>提交</Button>
            <Button disabled={isLoading} variant="outlined" color="error" onClick={clear} style={{ marginRight: '24px' }}>清空</Button>
          </div>
        </div> */}
      </article>

      <SpeedDial
        ariaLabel="AutuGPT"
        className={styles.speed_dial}
        sx={{ position: 'fixed', top: 100, right: 16 }}
        direction='down'
        icon={
          <Avatar sx={{ width: 36, height: 36, backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)' }}>
            <SpeedDialIcon fontSize="small" />
          </Avatar>
        }
      >
        {steps.map((action, index) => (
          <SpeedDialAction
            key={action.title}
            icon={action.icon}
            tooltipTitle={action.title}
            tooltipOpen
            onClick={() => {
              index === 2 && window.open('https://www.autubackend.com/register/trader', '_blank')
            }}
          />
        ))}
      </SpeedDial>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-black'>
          {"登录提示"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className='text-gray-600'>获取策略源码需要登录账号，确认前往登录吗？</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setOpen(false)}>暂不</Button>
          <Button href='https://backend.autu.finance/login'>
            立即登录
          </Button>
        </DialogActions>
      </Dialog>
		</section>
	);
};

export default Home;
