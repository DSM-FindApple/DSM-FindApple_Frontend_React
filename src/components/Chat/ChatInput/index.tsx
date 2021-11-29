import React, { FC, useEffect, useState } from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiFillSchedule, AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useSocket } from '../../../libs/hooks/useSocket';
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
  const [ fileURL, setFileURL ] = useState<any>(null)
  const [ isShow, setIsShow ] = useState<boolean>(false)
  const [ promise, setPromise ] = useState<any>()
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

  const onGetImage = () => {
    (window as any).ChatDetail.startGetImage();
  }

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
    if(!(window as any).ChatDetail){
      history.push('/location');
    }
    else {
      (window as any).ChatDetail.startSelectDate();
    }
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