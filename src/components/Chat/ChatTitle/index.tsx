import React from 'react';
import * as S from './styled'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillSchedule } from 'react-icons/ai'
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../Recoil/chat/chatState';

const ChatTitle = () => {
  const chatUserState = useRecoilValue(chatState);
  const history = useHistory()

  const onSelectDate = () => {
    history.push('/location');
    // (window as any).ChatDetail.startSelectDate();
  }

  const onBack = () => {
    (window as any).ChatDetail.exitChatDetail();
  }

  return (
    <>
        <S.ChatTitleBox>
            <BsArrowLeft onClick={onBack}/>
            <S.ChatPartner>{chatUserState.title}</S.ChatPartner>
            <S.Appointment onClick={onSelectDate}>
              <AiFillSchedule />
              <span>약속잡기</span>
            </S.Appointment>
        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;