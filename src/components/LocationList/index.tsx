import React, { useEffect, useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'

const LocationList = () => {
    const [ keyword, setKeyword ] = useState('');
    const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const onSearch = (e: any) => {
        e.preventDefault()
        console.log(keyword)
        LocationApi.getLocationList(keyword, 2)
        .then((res) => {
            console.log(res.data)
            setData(res.data.documents)
        })
        .catch((err) => {
            console.log(err)
        })
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
                    data.map((i: any, index: any) => {
                        let category= i.category_name.split(' > ')
                        return (
                            <S.LocationBox key={i.id}>
                                <S.PlaceName>
                                    {i.place_name}
                                    <span>{category[category.length-1]}</span>
                                </S.PlaceName>
                                <S.Address>{i.address_name}</S.Address>
                                <S.PhoneNumber>{i.phone}</S.PhoneNumber>
                            </S.LocationBox>
                        )
                    })
                }
            </S.LocationListWrapper>
        </>
    );
}

export default LocationList;