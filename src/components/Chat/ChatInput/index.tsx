import React, { FC, useEffect, useState } from 'react';
import * as S from './styles'
import { AiFillSchedule, AiOutlineSend } from 'react-icons/ai'
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../Recoil/chat/chatState';
import chatApi from '../../../libs/api/chat/chatApi';
import { useHistory } from 'react-router';

interface Props {
  chatId: string;
  socket: any
}

const ChatInput:FC<Props> = ({chatId, socket}) => {
  const chatUserState = useRecoilValue(chatState);
  
  const [ message, setMessage ] = useState<string>('');
  const [ promise, setPromise ] = useState<any>();
  const history = useHistory();

  useEffect(() => {
    chatApi.getPromise()
    .then((res) => {
      console.log(res.data)
      const promiseArray = res.data.filter((e: any) => {return e.chatId === chatUserState.chatId})
      promiseArray !== [] && setPromise(promiseArray[promiseArray.length-1])
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const onSendMessage = (e: any) => {
    e.preventDefault()
    if(message !== ''){
      socket.current.emit("sendMessage",JSON.stringify({
        chatId: chatId,
        message: message
      }))
      setMessage("")
    } else {
      alert('빈칸을 다 채워주세요')
    }
  }

  const onSelectDate = () => {
    console.log(promise)
    !promise && (window as any).ChatDetail.startSelectDate();
    promise !== [] && window.confirm('이미 약속이 있습니다. 약속을 완료하시겠습니까?') &&
    socket.current.emit("sendMessage",JSON.stringify({
      chatId: chatId,
      message: '약속이 완료되었습니다.'
    }))
  }

  return (
    <>
      <S.ChatInputBox onSubmit={onSendMessage}>
        <S.InputBox>
          <AiFillSchedule onClick={onSelectDate}/>
          <S.ChatInput onChange={(e: any) => setMessage(e.target.value)} value={message}/>
        </S.InputBox>
        <S.SendChatButton>
          <AiOutlineSend/>
        </S.SendChatButton>
      </S.ChatInputBox>
    </>
  );
}

export default ChatInput;