import React from 'react';
import * as S from './styled'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillSchedule } from 'react-icons/ai'
import { useHistory } from 'react-router';

const ChatTitle = () => {
  const history = useHistory()

  const onSelectDate = () => {
    (window as any).ChatDetail.startSelectDate();
    history.push('/location');
  }

  const onBack = () => {
    (window as any).ChatDetail.exitChatDetail();
  }

  return (
    <>
        <S.ChatTitleBox>
            <BsArrowLeft onClick={onBack}/>
            <S.ChatPartner>한준호</S.ChatPartner>
            <S.Appointment onClick={onSelectDate}>
              <AiFillSchedule />
              <span>약속잡기</span>
            </S.Appointment>
        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;