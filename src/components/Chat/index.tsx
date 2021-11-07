import React, { FC } from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'
import queryString from "query-string";
import { RouteComponentProps } from 'react-router';

const Chat: FC<RouteComponentProps> = ({location}: any) => {
  
  const query = queryString.parse(location.search);
  console.log(query.id)

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