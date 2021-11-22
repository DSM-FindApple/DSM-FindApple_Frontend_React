import React, { FC, useEffect, useState } from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'
import queryString from "query-string";
import { RouteComponentProps, useHistory } from 'react-router';
import io from 'socket.io-client';
import { useSocket } from '../../libs/hooks/useSocket';
import { useRecoilState } from 'recoil';
import { chatMessageState } from '../../Recoil/chat/chatState';

const Chat: FC<RouteComponentProps> = ({location}: any) => {
  const query = queryString.parse(location.search);
  const [messages, setMessages] = useState<any[]>([]);
  const [chatMessage, setChatMessage ] = useRecoilState(chatMessageState)
  const {socket} = useSocket();
  const roomid = '0fecda03-3de7-4c63-89c2-743355b6f9a7';
  let chatlist:any[]=chatMessage;

  console.log(socket)

  useEffect(()=> {
    socket.current.emit("connect", ()=> {
      console.log('asd')
      socket.current.emit('joinRoom', query.id)
    })
  })

  useEffect(() => {
    socket.current.on("message", (message: any) => {
      chatlist=[...chatlist, message]
      setChatMessage([...chatlist])
    });

    socket.current.on("image", (message: any) => {
      chatlist=[...chatlist, message]
      setChatMessage([...chatlist])
    });

    socket.current.on("promise", (message: any) => {
      chatlist=[...chatlist, message]
      setChatMessage([...chatlist])
    });

  },[]);

  const onDisConnect = () => {
    socket.current.emit("disconnect")
  }

  return (
    <>
    <S.ChatWrapper>
      <ChatTitle />
      <ChatContent data={chatMessage}/>
      <ChatInput chatId={roomid}/>
    </S.ChatWrapper>
    </>
  );
}

export default Chat;