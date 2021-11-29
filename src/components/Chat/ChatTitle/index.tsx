import React, { useEffect, useState } from 'react';
import * as S from './styled'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { chatState } from '../../../Recoil/chat/chatState';
import chatApi from '../../../libs/api/chat/chatApi';

const ChatTitle = () => {
  const chatUserState = useRecoilValue(chatState);
  const [ promise, setPromise ] = useState<any>()
  const [ isOpenSetting, setIsOpenSetting ] = useState<boolean>(false)
  const history = useHistory()

  const onBack = () => {
    (window as any).ChatDetail.exitChatDetail();
  }

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

  const onSetting = () => {
    setIsOpenSetting(!isOpenSetting)
  }

  const onChatBan = (type: string) => {
    if(type === "post"){
      chatApi.postChatBan(chatUserState.targetId)
      .then((_) => {
        alert("해당 유저를 차단했습니다.")
        setIsOpenSetting(true);
      })
      .catch((err) => {
        console.log(err)
      })
    }else if(type==="delete"){
      chatApi.deleteChatBan(chatUserState.targetId)
      .then((_) => {
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
              {chatUserState.title}
            </S.ChatPartner>
            <BsThreeDotsVertical onClick={onSetting}/>
              {
                isOpenSetting &&
                <S.ChatSetting>
                    {/* <div>채팅방 나가기</div> */}
                    {
                      chatUserState.isBan ?
                      <div onClick={()=>onChatBan("delete")}>상대방 차단해제</div>
                      : <div onClick={()=>onChatBan("post")}>상대방 차단</div>
                    }
                    
                </S.ChatSetting>
              }

        </S.ChatTitleBox>
    </>
  );
}

export default ChatTitle;