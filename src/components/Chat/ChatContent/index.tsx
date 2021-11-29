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
  const [messages, setMessages] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState<number>(0)
  const [oldPageNum, setOldPageNum] = useState<number>(0)
  
  const Scroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ inline: 'nearest', block: 'end' });
    }
  }

  useEffect(() => {
    oldPageNum+1 === pageNum &&
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
    chatUserState.chatId &&
    chatApi.getChatHistoryMessgage(chatUserState.chatId, pageNum)
    .then((res)=>{
      setMessages([...res.data, ...messages])
      setPageNum(pageNum+1)
      setOldPageNum(pageNum)
      if(pageNum === 0) {
        Scroll()
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    onHistoryMessage()
  },[chatUserState.chatId])

  const onAddMessage = ()=> {
    onHistoryMessage()
  }
  
  return (
    <>
        <S.ContentWrapper>
          <S.AddMessage onClick={onAddMessage}>더보기</S.AddMessage>
          {
            messages.map((i: any, index: number) => {
              let time = parseInt(i.sendTime.split(':')[0])+9 + '시 '+i.sendTime.split(':')[1] + '분'
              return (
                <>
                  {
                    i.messageType === "MESSAGE" &&
                    <div key={`${i.messageId}-${index}`}>
                      {
                        i.kakaoId === chatUserState.targetId ?
                        <PartnerChat message={i.message} sendTime={time}/>
                        : <MyChat message={i.message} sendTime={time}/>
                      }
                    </div>
                  }
                  {
                    i.messageType === "PROMISE" &&
                    <div key={i.promiseId}>
                      <Promise sendUserId={i.kakaoId} promiseId={i.promiseId}/>
                    </div>
                  }
                </>
                
              )
            })
          }
          {
            data.map((i: any, index: number) => {
              let time = parseInt(i.sendTime.split(':')[0])+9 + '시 '+i.sendTime.split(':')[1] + '분'
              return (
                <>
                  {
                    i.messageType === "MESSAGE" &&
                    <div key={`${i.messageId}-${index}`}>
                      {
                        i.kakaoId === chatUserState.targetId ?
                        <PartnerChat message={i.message} sendTime={time}/>
                        : <MyChat message={i.message} sendTime={time}/>
                      }
                    </div>
                  }
                  {
                    i.messageType === "PROMISE" &&
                    <div key={i.promiseId}>
                      <Promise sendUserId={i.kakaoId} promiseId={i.promiseId}/>
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