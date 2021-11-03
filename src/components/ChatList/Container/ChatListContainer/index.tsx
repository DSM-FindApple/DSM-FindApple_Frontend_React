import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface Props {
  name: string,
  title: string,
  read: boolean,
  id: string,
}

const ChatListContainer: FC<Props> = ({name, title, read, id}) => {
  const onChatLink = () => {
    (window as any).CHAT_DETAIL.startChatDetail()
  }

  return (
    <>
        <S.ContainerWrapper onClick={onChatLink}>
            {/* <img src={} alt="asd"> */}
            <div>
              <div style={{width: '40px', height: "40px", borderRadius: '50%', backgroundColor: "blue"}} />
              <S.ChatInfo read={read}>
                <div>{name}</div>
                {/* <div>{title}</div> */}
                <div>{title}</div>
              </S.ChatInfo>
            </div>
            <S.NewChat read={read}/>
        </S.ContainerWrapper>
    </>
  );
}

export default ChatListContainer;