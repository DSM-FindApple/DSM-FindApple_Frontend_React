import React, { useState } from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

const ChatInput = () => {
  const [fileURL, setFileURL] = useState<any>(null)
  const [isShow, setIsShow ] = useState<boolean>(false)

  const onAddImage = (e: any) => {
    const img = e.target.files[0];
    const formData = new FormData();
    setFileURL(URL.createObjectURL(img))
    formData.append('file', img);
    setIsShow(true)
  }

  const onCloseImage = () => {
    setIsShow(false)
    setFileURL(null)
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
          <S.FileLabel htmlFor="input-file">
            <BsImage />
          </S.FileLabel>
          <S.FileInput type='file' id="input-file"
              accept='image/jpg,impge/png,image/jpeg,image/gif' 
              name='profile_img' 
              onChange={onAddImage}>
          </S.FileInput>
          
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