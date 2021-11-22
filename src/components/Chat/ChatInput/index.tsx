import React, { FC, useState } from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useSocket } from '../../../libs/hooks/useSocket';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../Recoil/chat/chatState';

interface Props {
  chatId: string;
}

const ChatInput:FC<Props> = ({chatId}) => {
  const chatUserState = useRecoilValue(chatState);
  const { socket } = useSocket();
  const [ message, setMessage ] = useState<string>('');
  const [ fileURL, setFileURL ] = useState<any>(null)
  const [ isShow, setIsShow ] = useState<boolean>(false)

  const onCloseImage = () => {
    setIsShow(false)
  }

  const onGetImage = () => {
    (window as any).ChatDetail.startGetImage();
  }

  const sendMessage = (e: any) => {
    e.preventDefault()
    if(message===''){
      alert('채팅을 입력해주세요')
    } else {
      socket.current.emit('sendMessage', {
        chatId: chatUserState.chatId,
        message: message
      }, {

      })
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
      <S.ChatInputBox onSubmit={sendMessage}>
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