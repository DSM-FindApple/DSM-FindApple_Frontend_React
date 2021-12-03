import React, { useEffect, useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import Search from './Search';
import queryString from 'query-string'

const SearchList = ({location}: any) => {
    const query = queryString.parse(location.search);
    const [ keyword, setKeyword ] = useState('');
    const [ prop, setProp ] = useState('');

    const onSearch = (e: any) => {
        e.preventDefault()
        setProp(keyword)
    }

    const onBack = () => {
        (window as any).Search.back()
    }

    return (
        <>
            <S.SearchListWrapper>
                <S.Box>
                    <S.SearchListBox onSubmit={onSearch}>
                        <IoIosArrowBack onClick={onBack}/>
                        <S.SearchInput onChange={(e) => setKeyword(e.target.value)}/>
                        <AiOutlineSearch/>
                    </S.SearchListBox>
                </S.Box>
                {
                    prop &&
                    <Search keyword={prop} type={query.type}/>
                }
            </S.SearchListWrapper>
        </>
    );
}

export default SearchList;