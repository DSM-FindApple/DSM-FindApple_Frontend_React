import React from 'react';
import * as S from './styles'
import { BsImage } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'

const ChatInput = () => {
  return (
    <>
        <S.ChatInputBox>
          <S.InputBox>
            <BsImage />
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