import React, { FC, useEffect, useRef } from 'react';
import MyChat from './Myself';
import PartnerChat from './Partner';
import * as S from './styles'

interface Props {
  data: any[]
}

const ChatContent: FC<Props> = ({data}) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;;
  
  const Scroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ inline: 'nearest', block: 'end' });
    }
  }
  
  useEffect(() => {
    Scroll()
  }, [])

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
                    i.username ==='김재원' ?
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