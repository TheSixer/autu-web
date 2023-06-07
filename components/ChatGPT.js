import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useRef, Fragment } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import Button from '@mui/material/Button';
import hljs from 'highlight.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import {useSession} from "next-auth/react";
// import Tooltip from '@mui/material/Tooltip';

import "highlight.js/styles/monokai-sublime.css";
import { cloneDeep, set } from 'lodash';
let md = require('markdown-it')({
  highlight: function (str) {
    return hljs.highlightAuto(str).value;
  }
});

let evtSource = null;

const Home = () => {
  // const [index, setIndex] = useState(0);
  // const { data: session } = useSession();
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

  const submit = async () => {
    // my.current.style.display = 'none'
    // customer.current.style.display = 'none'
    // userList.current.style.display = 'none'
    // gptList.current.style.display = 'none'
    if (!value) {
      return
    }
    // userList.current.innerHTML = ''
    // gptList.current.innerHTML = ''
    useLoding(true)
    // my.current.style.display = 'block'
    // userList.current.style.display = 'block'
    // userList.current.innerHTML = textarea.current.value.trim()
    setQuestions([...questions, value.trim()])
    useValue('')
    scrollToBottom();

    evtSource = new EventSourcePolyfill(`${process.env.NEXT_PUBLIC_BASEAI_URL}/openai/completions/stream?prompt=${value.trim()}`, {
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

        // customer.current.style.display = 'block'
        // gptList.current.style.display = 'block'
        text = text + data.message
        // gptList.current.innerHTML = md.render(text);
        const crt = {
          role: 1,
          content: md.render(text),
        }
        const list = cloneDeep(messageList);
        list[index.current] = crt;
        // console.log(index.current, list);
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
		<section className="max-w-screen-xl mx-auto py-6">

      <Typography
        variant="h5"
        color="text.primary"
        gutterBottom
      >
        ChatGPT
      </Typography>

      <article className={'main'}>
          
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div ref={chat} className="h-96 overflow-x-auto">
              <List sx={{ width: '100%', maxWidth: 860, bgcolor: 'background.paper' }}>
                {
                  questions.map((question, index) => (
                    <>
                      <ListItem alignItems="flex-start" key={`me_${index}`}>
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/assets/images/my.png" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="我："
                          secondary={
                            <Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
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
                      </ListItem>
                      {
                        messageList[index] ? (
                          <ListItem alignItems="flex-start" key={`chat_${index}`}>
                            <ListItemAvatar>
                              <Avatar alt="Cindy Baker" src="/assets/images/customer.png" />
                            </ListItemAvatar>
                            <ListItemText
                              primary="ChatGPT："
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    <p dangerouslySetInnerHTML={{
                                      __html: messageList[index].content
                                    }}></p>
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        ) : null
                      }
                    </>
                  ))
                }
              </List>
            </div>
          </CardContent>
        </Card>
          
        <div className='relative'>
          <textarea
            value={value}
            onChange={handleInput}
            maxLength={250}
            aria-label="up-input"
            className="mt-4 p-2 h-32 text-base relative w-full border border-gray-400 active:border-blue-500 outline-0"
            placeholder="请输入内容..."
          />

          <span className="absolute bottom-2.5 right-2.5">{value ? value.length : 0}/250</span>
        </div>
      </article>
      <div className={'btnGroup'}>
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
          <Button disabled={isLoading} className="bg-yellow-500" sx={{ width: 120, mr: 4 }} variant="contained" color="warning" onClick={submit}>提交</Button>
          <Button disabled={isLoading} variant="outlined" color="error" onClick={clear} style={{ marginRight: '24px' }}>清空</Button>
        </div>
      </div>
		</section>
	);
};

export default Home;
