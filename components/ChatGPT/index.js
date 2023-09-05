import React, { useState, useRef, Fragment } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
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
import QuizIcon from '@mui/icons-material/Quiz';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import "highlight.js/styles/monokai-sublime.css";
import { cloneDeep, set } from 'lodash';

import styles from './index.module.css';

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

const vipSolutions = [
  {
    title: '1. 双均线策略(期货)',
    intro: '双均线策略是简单移动平均线策略的加强版。移动平均线目的是过滤掉时间序列中的高频扰动，保留有用的低频趋势。它以滞后性的代价获得了平滑性，比如，在一轮牛市行情后，只有当价格出现大幅度的回撤之后才会在移动平均线上有所体现，而对于投资者而言则大大增加了交易成本。如果使用双均线策略，就可以在考虑长周期趋势的同时，兼顾比较敏感的小周期趋势，无疑是解决简单移动平均线滞后性弱点的一项有效方法。'
  },
  {
    title: '2. 菲阿里四价(期货)',
    intro: '昨天高点、昨天低点、昨日收盘价、今天开盘价，可并称为菲阿里四价。它由日本期货冠军菲阿里实盘采用的主要突破交易参照系。此外，因菲阿里主观心智交易的模式，决定了其在实际交易中还大量结合并运用了“阻溢线”的方式，即阻力线、支撑线。主要特点：日内交易策略，收盘平仓；菲阿里四价指昨日高点、昨日低点、昨日收盘、今日开盘；上轨＝昨日高点；下轨＝昨日低点；当价格突破上轨，买入开仓；当价格跌穿下轨，卖出开仓。'

  },
  {
    title: '3. 布林线均值回归(期货)',
    intro: 'BOLL指标是美国股市分析家约翰·布林根据统计学中的标准差原理设计出来的一种非常简单实用的技术分析指标。一般而言，股价的运动总是围绕某一价值中枢（如均线、成本线等）在一定的范围内变动，布林线指标正是在上述条件的基础上，引进了“股价通道”的概念，其认为股价通道的宽窄随着股价波动幅度的大小而变化，而且股价通道又具有变异性，它会随着股价的变化而自动调整。由于之前大部分交易策略都是选股或者趋势追踪的择时，所以基于这一指标我们设计了一个均值回归的交易策略。'

  },
  {
    title: '4. 网格交易(期货)',
    intro: '网格交易是利用市场震荡行情获利的一种主动交易策略，其本质是利用投资标的在一段震荡行情中价格在网格区间内的反复运动以进行加仓减仓的操作以达到投资收益最大化的目的。通俗点讲就是根据建立不同数量.不同大小的网格，在突破网格的时候建仓，回归网格的时候减仓，力求能够捕捉到价格的震荡变化趋势，达到盈利的目的。'
  },
  {
    title: '5. 跨期套利(期货)',
    intro: '跨期套利就是在同一期货品种的不同月份合约上建立数量相等、方向相反的交易头寸，最后以对冲或交割方式结束交易、获得收益的方式。最简单的跨期套利就是买入近期的期货品种，卖出远期的期货品种。'
  },
  {
    title: '6. 跨品种套利(期货)',
    intro: '跨品种套利是指利用两种不同的，但相互关联的商品之间的合约价格差异进行套利交易，即买入某一交割月份的某种商品合约，同时卖出另一相同交割月份、相互关联的商品合约，以期在有利时机同时将这两个合约对冲平仓获利。跨品种套利的主导思想是寻找两种或多种不同，但具有一定相关性的商品间的相对稳定关系(差值、比值或其他)，在其脱离正常轨道时采取相关反向操作以获取利润。根据套利商品之间的关系，跨品种套利可分为相关商品套利和产业链跨品种套利两种类型。'
  },
  {
    title: '7. 海龟交易法(期货)',
    intro: '海龟交易法则属于趋势交易，首先建立唐奇安通道（下文会具体解释），即确定上突破线和下突破线，如果价格突破上线，则做多，如果价格突破下线就平仓或做空。'
  },
  {
    title: '8. Dual Thrust(期货)',
    intro: 'Dual Thrust是一个趋势跟踪系统，由Michael Chalek在20世纪80年代开发，曾被Future Thruth杂志评为最赚钱的策略之一。Dual Thrust系统具有简单易用、适用度广的特点，其思路简单、参数很少，配合不同的参数、止盈止损和仓位管理，可以为投资者带来长期稳定的收益，被投资者广泛应用于股票、货币、贵金属、债券、能源及股指期货市场等。'
  },
  {
    title: '9. R-Breaker(期货)',
    intro: 'R-Breaker是一种短线日内交易策略，该策略已经在市场上存活了二十年之久，尤其当指数波动较大时，该策略表现越好，根据S&P至2011年底的统计，R-Break也多次名列前十，由于进入榜单的交易系统业绩并不稳定，尤其是一年业绩榜单，时常会发生变化，因此模型的稳定性和一致性其实比短期排名更加关键，杂志给出了长期来看一致性最好的十大交易模型，其中就包括 R-Breaker 等模型，它们的业绩不一定总是能排进前十名的榜单，但长期以来具有较高的一致性。'
  },
  {
    title: '10. 做市商交易(期货)',
    intro: '做市商的主要利润来自于双向报价的买卖价差。因而，做市商需要计算期权的理论价格，在大量买入和卖出交易中，逐渐积累每笔交易价格和理论价格的差价，并根据持仓头寸特征，动态调整价差。由于做市商以被动成交为主，因而在一些对手方持续大量单边交易的情况下，做市商可能面临损失。'
  },
  {
    title: '11. alpha对冲（期货）',
    intro: '投资者在市场交易中面临着系统性风险（即贝塔或Beta、β风险）和非系统性风险（即阿尔法或Alpha、α风险），通过对系统性风险进行度量并将其分离，从而获取超额绝对收益（即阿尔法收益）的策略组合，即为阿尔法策略。'
  }
];

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

let evtSource = null;

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [value, useValue] = useState('');
  const [isContent, useIsContent] = useState(false);
  const [isLoading, useLoding] = useState(false);
  const chat = useRef(null);
  const index = useRef(0);
  const [open, setOpen] = React.useState(false);

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
    useLoding(true)
    setQuestions([...questions, val.trim()])
    useValue('')
    scrollToBottom();

    evtSource = new EventSourcePolyfill(`${process.env.NEXT_PUBLIC_BASEAI_URL}/openai/completions/stream?prompt=${val.trim()}`, {
      headers: {
        token: localStorage.getItem('x-auth-token')
      }
    });
    let text = ''

    evtSource.onmessage = function(e) {
      try {
        const data = e.data && JSON.parse(e.data)
        if (data.end) {
          index.current += 1;
          evtSource.close()
          useLoding(false)
        }

        if (!data.message) {
          return
        }
        text = text + data.message
        const crt = {
          role: 1,
          content: md.render(text),
        }
        const list = cloneDeep(messageList);
        list[index.current] = crt;
        setMessageList(list);
        scrollToBottom();
      } catch (e) {

      }
    }
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
      <div className={`${styles.sidebar_scrollview} pt-24 h-screen px-4 basis-1/3 bg-gray-950 overflow-y-scroll`}>
        <List>
          {
            vipSolutions.map(({title, intro}, index) => (
              <ListItem
                // secondaryAction={
                //   <IconButton color="warning" size="small" sx={{ marginRight: '-16px'}} onClick={() => submit(solute)}>
                //     <SendIcon />
                //   </IconButton>
                // }
                key={'list_' + index}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: 'block', mb: '10px', fontSize: '17px', fontWeight: 600, cursor: 'pointer' }}
                      component="h1"
                      variant="body2"
                      color="white"
                      onClick={() => setOpen(true)}
                    >
                      <span className='hover:text-yellow-400'>{title}</span>
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline', fontSize: '16px', lineHeight: '28px', cursor: 'pointer' }}
                        component="span"
                        variant="body2"
                        color="#dddddd"
                        onClick={() => setOpen(true)}
                      >
                        <span className='hover:text-yellow-400 hover:underline'>{intro}</span>
                      </Typography>
                      <Typography
                        sx={{ display: 'block', mt: '6px', fontSize: '14px' }}
                        component="p"
                        variant="body2"
                        color="#FFD936"
                      >
                        <span onClick={() => setOpen(true)} className='text-yellow-400 hover:underline cursor-pointer'>获取源码</span>
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))
          }
        </List>
      </div>

      <article ref={chat} className={'relative main pt-24 h-screen basis-2/3 overflow-y-scroll'}>
        {
          !questions?.length ? (
            <div className={styles.empty_view}>
              <h1 className='mt-4 text-4xl font-black text-center'>ChatGPT</h1>
              <Grid container spacing={2}  sx={{ m: '60px auto' }} className="max-w-screen-lg">
                {
                  solutions.map((solute, index) => (
                    <Grid xs={4} key={'solute_' + index}>
                      <Item variant="outlined" onClick={() => submit(solute)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, cursor: 'pointer' }} className="hover:border-yellow-300">
                        <span className='text-base text-gray-900'>{ solute }</span>
                        <ArrowRightAltIcon />
                      </Item>
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          ) : null
        }

        <div className={styles.empty_view}>
          <List sx={{ width: '100%' }}>
            {
              questions.map((question, index) => (
                <>
                  <Divider />
                  <ListItem key={`me_${index}`}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', py: 2, mx: 'auto', width: '780px' }}>
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
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', py: 2, mx: 'auto', width: '780px' }}>
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
          </List>
        </div>
        <div className={`${styles.enter_view} sticky flex items-center justify-center w-full h-40 bottom-0 left-0`}>
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
