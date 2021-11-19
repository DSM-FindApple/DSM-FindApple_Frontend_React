import React, { useState } from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

const ChatInput = () => {
  const [fileURL, setFileURL] = useState<any>(null)
  const [isShow, setIsShow ] = useState<boolean>(false)

  const onCloseImage = () => {
    setIsShow(false)
  }

  const onGetImage = () => {
    (window as any).ChatDetail.startGetImage();
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
      <S.ChatInputBox>
        <S.InputBox>
          <BsImage onClick={onGetImage}/>
          <S.ChatInput />
        </S.InputBox>
        <S.SendChatButton>
          <AiOutlineSend/>
        </S.SendChatButton>
      </S.ChatInputBox>
    </>
  );
}

export default ChatInput;