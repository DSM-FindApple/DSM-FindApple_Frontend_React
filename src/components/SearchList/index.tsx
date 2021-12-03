import React, { useEffect, useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'
import Search from './Search';

const SearchList = ({match}: any) => {
    const { type } = match.params;
    console.log(type)
    const [ keyword, setKeyword ] = useState('');
    const [ prop, setProp ] = useState('');

    const onSearch = (e: any) => {
        e.preventDefault()
        setProp(keyword)
    }

    return (
        <>
            <S.SearchListWrapper>
                <S.Box>
                    <S.SearchListBox onSubmit={onSearch}>
                        <IoIosArrowBack />
                        <S.SearchInput onChange={(e) => setKeyword(e.target.value)}/>
                        <AiOutlineSearch/>
                    </S.SearchListBox>
                </S.Box>
                {
                    prop &&
                    <Search keyword={prop} type={type}/>
                }
            </S.SearchListWrapper>
        </>
    );
}

export default SearchList;