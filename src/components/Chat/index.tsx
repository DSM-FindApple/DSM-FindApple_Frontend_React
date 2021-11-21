import React, { FC, useEffect, useState } from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'
import queryString from "query-string";
import { RouteComponentProps, useHistory } from 'react-router';
import io from 'socket.io-client';
import { useSocket } from '../../libs/hooks/useSocket';

const Chat: FC<RouteComponentProps> = ({location}: any) => {
  const query = queryString.parse(location.search);
  const [messages, setMessages] = useState<any[]>([]);
  const {socket} = useSocket()
  const roomid = '0fecda03-3de7-4c63-89c2-743355b6f9a7'

  useEffect(() => {
    console.log(messages)
    socket.current.on("message", (message: any) => {
      setMessages([...messages, message])
      console.log(message)
    });
  },[messages]);

  const onDisConnect = () => {
    socket.current.emit("disconnect")
  }

  return (
    <>
    <S.ChatWrapper>
      <ChatTitle />
      <ChatContent data={messages}/>
      <ChatInput chatId={roomid}/>
    </S.ChatWrapper>
    </>
  );
}

export default Chat;