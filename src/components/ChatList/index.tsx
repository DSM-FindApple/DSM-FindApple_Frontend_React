import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import * as S from './styles'
import io from 'socket.io-client';
import chatApi from '../../libs/api/chat/chatApi';


const ChatList = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    chatApi.getChatList()
    .then((res) => {
      setData(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <>
        <S.Wrapper>
            {
              data !== [] &&
              data.map((i: any, index) => {
                return (
                  <ChatListContainer {...i} key={index}/>
                )
              })
            }
        </S.Wrapper>
    </>
  );
}

export default ChatList;