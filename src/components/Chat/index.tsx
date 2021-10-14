import React from 'react';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'

const Chat = () => {
  return (
    <>
    <S.ChatWrapper>
      <ChatTitle />
      <ChatInput />
    </S.ChatWrapper>
    </>
  );
}

export default Chat;