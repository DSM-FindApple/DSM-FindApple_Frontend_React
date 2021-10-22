import React from 'react';
import * as S from './styled'
import { BsArrowLeft,BsThreeDotsVertical } from 'react-icons/bs'
import { useHistory } from 'react-router';

const ChatTitle = () => {
  const history = useHistory();

  const onBack = () => {
    history.goBack()
  }

  return (
    <>
        <S.ChatTitleBox>
            <BsArrowLeft onClick={onBack}/>
            <S.ChatPartner>한준호</S.ChatPartner>
            <BsThreeDotsVertical />
        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;