import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import * as S from './styles'
import io from 'socket.io-client';
import chatApi from '../../libs/api/chat/chatApi';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../Recoil/auth/authApi';


const ChatList = () => {
  const [ data, setData ] = useState([]);
  const token = useRecoilValue(tokenState)

  useEffect(() => {
    console.log(token, 'asd')
    console.log(localStorage.getItem('access-token'), 'asd')
    chatApi.getChatList()
    .then((res) => {
      setData(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[token])

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