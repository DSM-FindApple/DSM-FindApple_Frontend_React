import React, { FC, useEffect, useState } from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useSocket } from '../../../libs/hooks/useSocket';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../Recoil/chat/chatState';
import chatApi from '../../../libs/api/chat/chatApi';

interface Props {
  chatId: string;
  socket: any
}

const ChatInput:FC<Props> = ({chatId, socket}) => {
  const chatUserState = useRecoilValue(chatState);
  
  const [ message, setMessage ] = useState<string>('');
  const [ fileURL, setFileURL ] = useState<any>(null)
  const [ isShow, setIsShow ] = useState<boolean>(false)

  const onCloseImage = () => {
    setIsShow(false)
  }

  // useEffect(() => {
  //   chatApi.getChatHistoryMessgage(chatId, 1)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // },[])

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


  return (
    <>
      {
        isShow && 
        <S.ImgBox>
          <GrClose onClick={onCloseImage} />
          <img src={fileURL} />
        </S.ImgBox>
      }
      <S.ChatInputBox onSubmit={onSendMessage}>
        <S.InputBox>
          <BsImage onClick={onGetImage}/>
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