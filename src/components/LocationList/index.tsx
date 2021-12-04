import React, { useEffect, useState } from 'react';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import Location from './Location';
import { useHistory } from 'react-router';

const LocationList = () => {
    const history = useHistory();
    const [ keyword, setKeyword ] = useState('');
    const [ prop, setProp ] = useState('');
    const [ promiseData, setPromiseData ] = useState({
        chatId: '',
        date: '',
        targetId: -1
    });

    useEffect(() => {
    },[promiseData])

    const onSearch = (e: any) => {
        e.preventDefault()
        setProp(keyword)
    };

    (window as any).promiseLocation = function(chatId: string, date: string, targetId: number) {
        setPromiseData({
            chatId: chatId,
            date: date,
            targetId: targetId
        })
    };

    const onBack = () => {
        history.push(`/chat?id=${promiseData.chatId}`)
    }

    return (
        <>
            <S.LocationListWrapper>
                <S.Box>
                    <S.SearchBox onSubmit={onSearch}>
                        <IoIosArrowBack onClick={onBack}/>
                        <S.SearchInput onChange={(e) => setKeyword(e.target.value)}/>
                        <AiOutlineSearch onClick={onSearch}/>
                    </S.SearchBox>
                </S.Box>
                {
                    prop &&
                    <Location keyword={prop} {...promiseData}/>
                }
            </S.LocationListWrapper>
        </>
    );
}

export default LocationList;