import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatListContainer from './Container/ChatListContainer';
import * as S from './styles'
import io from 'socket.io-client';
import chatApi from '../../libs/api/chat/chatApi';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../Recoil/auth/authState';
import NonData from './Container/NonData'


const ChatList = () => {
  const [ data, setData ] = useState<any[]>([]);
  const [ token, setToken ] = useRecoilState(tokenState);
  const [ error, setError ] = useState(false);

  (window as any).sendToken = function(token: any) {
    localStorage.setItem('access-token', token)
    setToken(token)
    alert(token)
  };

  (window as any).setCallback = function() {
    alert('callback')
  };

  useEffect(() => {
    chatApi.getChatList()
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      setError(true)
      console.log(err)
    })
  },[token])

  console.log(data)

  return (
    <>
        <S.Wrapper>
            {
              !error ?
              data.map((i: any, index) => {
                return (
                  <ChatListContainer {...i} key={index}/>
                )
              })
              : <NonData />
            }
        </S.Wrapper>
    </>
  );
}

export default ChatList;