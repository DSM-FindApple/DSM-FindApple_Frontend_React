import React, { FC, useEffect, useState } from 'react';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import * as S from './styles'
import queryString from "query-string";
import { RouteComponentProps, useHistory } from 'react-router';
import { useSocket } from '../../libs/hooks/useSocket';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { chatMessageState, chatState } from '../../Recoil/chat/chatState';

const Chat: FC<RouteComponentProps> = ({location}: any) => {
  const query = queryString.parse(location.search);
  const history = useHistory()
  const setChatUserState = useSetRecoilState(chatState)
  const [chatMessage, setChatMessage ] = useRecoilState(chatMessageState)
  const {socket} = useSocket();
  // const [ chatlist, setChatlist ] = useState(chatMessage)
  let chatlist: any[] = chatMessage;

  (window as any).chatInfo = function(chatId: string, isBan: boolean, title: string, topMessage: string, targetId: number) {
    setChatUserState({
      chatId: chatId,
      isBan: isBan,
      title: title,
      topMessage: topMessage,
      targetId: targetId
    })
  }

  useEffect(()=> {
    socket.current.on("connect", ()=> {
      socket.current.emit("joinRoom", query.id)
    });
  },[])

  useEffect(() => {
    socket.current.on("message", (message: any) => {
      console.log(message)
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

    socket.current.on("info", (message: any) => {
      console.log(message)
    });
  },[]);
  
  return (
    <>
      <S.ChatWrapper>
        <ChatTitle />
        <ChatContent data={chatMessage}/>
        <ChatInput chatId={query.id} socket={socket}/>
      </S.ChatWrapper>
    </>
  );
}

export default Chat;