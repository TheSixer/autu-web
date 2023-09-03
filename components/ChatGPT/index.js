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

const solutions = [
  '帮我用代码实现一个经典网格策略',
  '帮我用代码实现一个马丁格尔策略',
  '用代码实现一个能卖在更高点的追踪卖出策略',
  '我想要用代码实现一个使用布林带的策略',
  '能帮我用代码实现抓区间突破的策略吗？',
  '用代码帮我实现一个Ichimoku策略',
  '我要用代码实现一个基于123法则进场的策略',
  '我想用代码实现一个追涨的动量策略',
  '我要用代码实现一个 RSI 超买超卖策略',
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
      <div className='pt-24 pr-4 basis-1/6 bg-gray-950'>
        <List>
          {
            solutions.map((solute, index) => (
              <>
                <ListItem
                  secondaryAction={
                    <IconButton color="warning" size="small" sx={{ marginRight: '-16px'}} onClick={() => submit(solute)}>
                      <SendIcon />
                    </IconButton>
                  }
                  key={'list_' + index}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'rgba(0,0,0,0)' }}>
                      <QuizIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="white"
                      >
                        <p>{solute}</p>
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" sx={{ borderColor: 'gray' }} />
              </>
            ))
          }
        </List>
      </div>

      <article ref={chat} className={'relative main pt-24 h-screen basis-5/6 overflow-y-scroll'}>
        {
          !questions?.length ? (
            <div className={styles.empty_view}>
              <h1 className='mt-4 text-4xl font-black text-center'>ChatGPT</h1>
              <Grid container spacing={2}  sx={{ m: '60px auto' }} className="max-w-screen-lg">
                {
                  solutions.map((solute, index) => (
                    <Grid xs={4} key={'solute_' + index}>
                      <Item variant="outlined" onClick={() => submit(solute)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, cursor: 'pointer' }} className="hover:border-yellow-300">
                        <span>{ solute }</span>
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
		</section>
	);
};

export default Home;
