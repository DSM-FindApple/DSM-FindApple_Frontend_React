import React, { useEffect, useRef } from 'react';
import MyChat from './Myself';
import PartnerChat from './Partner';
import * as S from './styles'

const ChatContent = () => {

  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;;
  
  const Scroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ inline: 'nearest', block: 'end', behavior: 'smooth' });
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
          <PartnerChat/>
          <PartnerChat/>
          <MyChat/>
          <PartnerChat/>
          <PartnerChat/>
          <MyChat/>
          <PartnerChat/>
          <PartnerChat/>
          <MyChat/>
          <PartnerChat/>
          <div ref={scrollRef} style={{marginTop: '11px'}}/>
        </S.ContentWrapper>
    </>
  );
}

export default ChatContent;