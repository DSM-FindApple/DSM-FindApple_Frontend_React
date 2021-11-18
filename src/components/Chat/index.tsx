import React, { FC, useEffect } from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'
import queryString from "query-string";
import { RouteComponentProps, useHistory } from 'react-router';
import styled from '@emotion/styled';

const Chat: FC<RouteComponentProps> = ({location}: any) => {
  const history = useHistory()

  useEffect(() => {
    window.addEventListener('LocationChoice', async (e) => {
      history.push('/location')
    })
  },[])

  const LocationChoice = (date: string, id: string) => {
    history.push({
      pathname: "/location",
      state: {date: date, id: id}
    });
  }
  
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