import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import * as S from './styles'
import io from 'socket.io-client';
import chatApi from '../../libs/api/chat/chatApi';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../Recoil/auth/authState';


const ChatList = () => {
  const [ data, setData ] = useState([]);
  const [ token, setToken ] = useRecoilState(tokenState);

  (window as any).sendToken = function(token: string) {
    localStorage.setItem('access-token', token)
    setToken(token)
    alert(token)
  }

  useEffect(() => {
    chatApi.getChatList()
    .then((res) => {
      setData(res.data)
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