import React from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'

const Chat = () => {
  return (
    <>
    <S.ChatWrapper>
      <ChatTitle />
      <ChatContent />
      <ChatInput />
    </S.ChatWrapper>
    </>
  );
}

export default Chat;