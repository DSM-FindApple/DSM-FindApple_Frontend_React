import React, { FC } from 'react';
import * as S from './styles'
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../../Recoil/chat/chatState';
import { useSocket } from '../../../../libs/hooks/useSocket';

interface Props {
    title: string
}

const Promise:FC<Props> = ({title}) => {
    const chatUserState = useRecoilValue(chatState);
    const {socket} = useSocket();

    const onPromiseAccept = () => {
        socket.current.emit("sendMessage", JSON.stringify({
            chatId: chatUserState.chatId,
            message: "약속에 동의하셨습니다."
        }))
    }
    
    return (
        <>
            <S.PromiseWrapper isMy={title === '재원' ? "right" : "left"}>
                <S.PromiseBox isMy={title === '재원' ? "#FFF4CC" : "#E3E6EA"}>
                    <div>약속</div>
                    <div>장소</div>
                    <div>날짜</div>
                    <div>시간</div>
                    <S.PromiseButton onClick={onPromiseAccept}>약속 수락하기</S.PromiseButton>
                </S.PromiseBox>
            </S.PromiseWrapper>
        </>
    );
}

export default Promise;

