import React from 'react';
import PartnerChat from './Partner';
import * as S from './styles'

const ChatContent = () => {
  return (
    <>
        <S.ContentWrapper>
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