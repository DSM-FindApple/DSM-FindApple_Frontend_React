import React, { useEffect, useRef } from 'react';
import PartnerChat from './Partner';
import * as S from './styles'

const ChatContent = () => {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    console.log(vh)
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  },[])


  
  return (
    <>
        <S.ContentWrapper>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
            <PartnerChat/>
        </S.ContentWrapper>
    </>
  );
}

export default ChatContent;