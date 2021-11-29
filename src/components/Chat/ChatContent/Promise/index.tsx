import React, { FC, useCallback, useEffect, useState } from 'react';
import * as S from './styles'
import { useRecoilValue } from 'recoil';
import { chatState } from '../../../../Recoil/chat/chatState';
import { useSocket } from '../../../../libs/hooks/useSocket';
import chatApi from '../../../../libs/api/chat/chatApi';
import { useLocationSearch } from '../../../../libs/hooks/useLocationSearch';

interface Props {
    sendUserId: string
    promiseId: number
}

const Promise:FC<Props> = ({sendUserId, promiseId}) => {
    const [ address, setAddress ] = useState();
    const geocoder = new kakao.maps.services.Geocoder();
    const [ dayData, setDayData ] = useState<any>({
        date: '',
        time: ''
    })
    const chatUserState = useRecoilValue(chatState);
    const {socket} = useSocket();

    useEffect(() => {
        chatApi.getPromiseInfo(promiseId)
        .then((res) => {
            (geocoder as any).coord2Address(res.data.longitude, res.data.latitude, function(result: any, status: any) {
                if (status === kakao.maps.services.Status.OK) {
                    console.log(result)
                    !!result[0].road_address ? setAddress(result[0].road_address.address_name)
                    : setAddress(result[0].address.address_name)
                }  
            })
            setDayData({
                date: res.data.meetAt.split('T')[0],
                time: res.data.meetAt.split('T')[1].split('.')[0]
            })
        })
    },[])

    const onPromiseAccept = () => {
        socket.current.emit("sendMessage", JSON.stringify({
            chatId: chatUserState.chatId,
            message: "약속에 동의하셨습니다."
        }))
    }
    
    return (

        
        <>
            <S.PromiseWrapper isMy={sendUserId !== chatUserState.targetId ? "right" : "left"}>
                <S.PromiseBox isMy={sendUserId !== chatUserState.targetId ? "#FFF4CC" : "#E3E6EA"}>
                    <div>약속</div>
                    <div>장소 : {address}</div>
                    <div>날짜 : {dayData.date}</div>
                    <div>시간 : {dayData.time}</div>
                    <S.PromiseButton onClick={onPromiseAccept}>약속 수락하기</S.PromiseButton>
                </S.PromiseBox>
            </S.PromiseWrapper>
        </>
    );
}

export default Promise;

