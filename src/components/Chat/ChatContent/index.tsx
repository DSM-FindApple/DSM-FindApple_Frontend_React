import React, { FC, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import chatApi from '../../../libs/api/chat/chatApi';
import { chatMessageState, chatState } from '../../../Recoil/chat/chatState';
import MyChat from './Myself';
import PartnerChat from './Partner';
import Promise from './Promise';
import * as S from './styles'

interface Props {
  data: any[]
}

const ChatContent: FC<Props> = ({data}) => {
  
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const chatUserState = useRecoilValue(chatState)
  const [messages, setMessages] = useRecoilState(chatMessageState);
  const [pageNum, setPageNum] = useState<number>(0)
  
  const Scroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ inline: 'nearest', block: 'end' });
    }
  }
  useEffect(() => {
    Scroll()
  }, [data])

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },[])

  const onHistoryMessage = () => {
    chatApi.getChatHistoryMessgage(chatUserState.chatId, pageNum)
    .then((res)=>{
      console.log(res.data)
      setMessages([...res.data, ...messages])
      setPageNum(pageNum+1)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    onHistoryMessage()
  },[chatUserState])

  const onAddMessage = ()=> {
    onHistoryMessage()
  }
  
  return (
    <>
        <S.ContentWrapper>
          <S.AddMessage onClick={onAddMessage}>더보기</S.AddMessage>
          {
            data.map((i: any, index: number) => {
              let time = i.sendTime.split(':')[0]+ '시 '+i.sendTime.split(':')[1] + '분'
              return (
                <>
                  {
                    i.messageType === "MESSAGE" &&
                    <div key={`${i.messageId}-${index}`}>
                      {
                        i.userName === chatUserState.title?
                        <PartnerChat message={i.message} sendTime={time}/>
                        : <MyChat message={i.message} sendTime={time}/>
                      }
                    </div>
                  }
                  {
                    i.messageType === "PROMISE" &&
                    <div key={i.discript}>
                      <Promise title={i.targetUserName}/>
                    </div>
                  }
                </>
                
              )
            })
          }
          <div ref={scrollRef} style={{marginTop: '11px'}}/>
        </S.ContentWrapper>
    </>
  );
}

export default ChatContent;