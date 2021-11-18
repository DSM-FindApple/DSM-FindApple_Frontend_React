import React, { useEffect, useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import { useInfiniteScroll } from '../../libs/hooks/useInfiniteScroll';
import Location from './Location';

const LocationList = ({location}: any) => {
    const [ keyword, setKeyword ] = useState('');
    const [ prop, setProp ] = useState('');
    
    console.log(location)

    const onSearch = (e: any) => {
        e.preventDefault()
        setProp(keyword)
    }

    return (
        <>
            <S.LocationListWrapper>
                <S.Box>
                    <S.SearchBox onSubmit={onSearch}>
                        <IoIosArrowBack />
                        <S.SearchInput onChange={(e) => setKeyword(e.target.value)}/>
                        <AiOutlineSearch/>
                    </S.SearchBox>
                </S.Box>
                {
                    prop &&
                    <Location keyword={prop}/>
                }
            </S.LocationListWrapper>
        </>
    );
}

export default LocationList;