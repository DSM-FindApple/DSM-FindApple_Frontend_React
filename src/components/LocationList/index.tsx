import React, { useEffect, useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import { useInfiniteScroll } from '../../libs/hooks/useInfiniteScroll';
import Location from './Location';

const LocationList = () => {
    const [ keyword, setKeyword ] = useState('');
    const [prop, setProp] = useState('');
    // const [data, loading, last] = useInfiniteScroll((page)=>LocationApi.getLocationList(keyword, page));
    

    const onSearch = (e: any) => {
        e.preventDefault()
        setProp(keyword)
    }

    return (
        <>
            <S.LocationListWrapper>
                <S.SearchBox onSubmit={onSearch}>
                    <IoIosArrowBack />
                    <S.SearchInput onChange={(e) => setKeyword(e.target.value)}/>
                    <AiOutlineSearch/>
                </S.SearchBox>
                {
                    prop &&
                    <Location keyword={prop}/>
                }
            </S.LocationListWrapper>
        </>
    );
}

export default LocationList;