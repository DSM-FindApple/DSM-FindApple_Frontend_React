import React, { useState } from 'react';
import * as S from './styled'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillSchedule } from 'react-icons/ai'
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { chatState } from '../../../Recoil/chat/chatState';
import chatApi from '../../../libs/api/chat/chatApi';

const ChatTitle = () => {
  const chatUserState = useRecoilValue(chatState);
  const [ isOpenSetting, setIsOpenSetting ] = useState<boolean>(false)
  const history = useHistory()

  const onSelectDate = () => {
    history.push('/location');
    // (window as any).ChatDetail.startSelectDate();
  }

  const onBack = () => {
    (window as any).ChatDetail.exitChatDetail();
  }

  const onSetting = () => {
    setIsOpenSetting(!isOpenSetting)
  }

  const onChatBan = (type: string) => {
    if(type === "post"){
      chatApi.postChatBan(chatUserState.targetId)
      .then((res) => {
        alert("해당 유저를 차단했습니다.")
        setIsOpenSetting(true);
      })
      .catch((err) => {
        console.log(err)
      })
    } else if(type==="delete"){
      chatApi.deleteChatBan(chatUserState.targetId)
      .then((res) => {
        alert("해당 유저를 차단을 해제했습니다.")
        setIsOpenSetting(false);
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  return (
    <>
        <S.ChatTitleBox>
            <BsArrowLeft onClick={onBack}/>
            <S.ChatPartner>
              <div onClick={onSetting}>{chatUserState.title}</div>
              {
                isOpenSetting ? 
                <GoTriangleDown/>
                :
                <GoTriangleUp/>
              }
              
            </S.ChatPartner>
              {
                isOpenSetting &&
                <S.ChatSetting>
                    <div>채팅방 나가기</div>
                    {
                      chatUserState.isBan ?
                      <div onClick={()=>onChatBan("delete")}>상대방 차단해제</div>
                      : <div onClick={()=>onChatBan("post")}>상대방 차단</div>
                    }
                    
                </S.ChatSetting>
              }
            <S.Appointment onClick={onSelectDate}>
              <AiFillSchedule />
              <span>약속잡기</span>
            </S.Appointment>
        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;