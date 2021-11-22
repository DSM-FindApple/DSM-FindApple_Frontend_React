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
}

const ChatListContainer: FC<Props> = ({chatId, isBan, targetProfileUrl, title, topMessage}) => {
  const setChatUserState = useSetRecoilState(chatState)
  const history = useHistory()

  const onChatLink = () => {
    setChatUserState({
      chatId: chatId,
      isBan: isBan,
      targetProfileUrl: targetProfileUrl,
      title: title,
      topMessage: topMessage
    })
    history.push(`/chat?id=${chatId}`);
    // (window as any).ChatDetail.startChatDetail(chatId);
  }

  return (
    <>
        <S.ContainerWrapper onClick={onChatLink}>
            {/* <img src={} alt="asd"> */}
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