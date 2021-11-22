import React, { FC, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../Recoil/chat/chatState';
import MyChat from './Myself';
import PartnerChat from './Partner';
import * as S from './styles'

interface Props {
  data: any[]
}

const ChatContent: FC<Props> = ({data}) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const chatInfo = useRecoilValue(chatState)
  
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
  
  return (
    <>
        <S.ContentWrapper>
          {
            data.map((i: any, index) => {
              return (
                <div key={`${i.messageId}-${index}`}>
                  {
                    i.username === chatInfo.title?
                    <PartnerChat message={i.message}/>
                    : <MyChat message={i.message}/>
                  }
                </div>
              )
            })
          }
          <div ref={scrollRef} style={{marginTop: '11px'}}/>
        </S.ContentWrapper>
    </>
  );
}

export default ChatContent;