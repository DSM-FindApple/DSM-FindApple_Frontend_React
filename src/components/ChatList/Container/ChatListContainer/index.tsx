import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { chatState } from '../../../../Recoil/chat/chatState';
import * as S from './styles';

interface Props {
  chatId: string
  isBan: boolean
  targetProfileUrl: string
  title: string
  topMessage: string
  targetId: string
}

const ChatListContainer: FC<Props> = ({chatId, isBan, targetProfileUrl, title, topMessage, targetId}) => {
  const setChatUserState = useSetRecoilState(chatState)
  const history = useHistory()

  const onChatLink = () => {
    let data = {
      chatId: chatId,
      isBan: isBan,
      title: title,
      topMessage: topMessage,
      targetId: targetId
    }
    if(!(window as any).ChatDetail){
      setChatUserState(data)
      history.push(`/chat?id=${chatId}`);
    }else {
      (window as any).ChatDetail.startChatDetail(chatId, isBan, title, topMessage, targetId);
    }
  }

  return (
    <>
        <S.ContainerWrapper onClick={onChatLink}>
            <div>
              <div style={{width: '40px', height: "40px", borderRadius: '50%', backgroundColor: "blue"}} />
              <S.ChatInfo read={true}>
                <div>{title}</div>
                <div>{topMessage}</div>
              </S.ChatInfo>
            </div>
            <S.NewChat read={true}/>
        </S.ContainerWrapper>
    </>
  );
}

export default ChatListContainer;