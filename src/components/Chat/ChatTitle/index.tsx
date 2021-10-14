import React from 'react';
import * as S from './styled'
import { BsArrowLeft,BsThreeDotsVertical } from 'react-icons/bs'

const ChatTitle = () => {
  return (
    <>
        <S.ChatTitleBox>
            <BsArrowLeft />
            <S.ChatPartner>한준호</S.ChatPartner>
            <BsThreeDotsVertical />
        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;