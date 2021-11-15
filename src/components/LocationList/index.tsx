import React, { useState } from 'react';
import LocationApi from '../../libs/api/Location/LocationApi';
import * as S from './styles'

const LocationList = () => {
    const [ keyword, setKeyword ] = useState('');
    const [ data, setData ] = useState([]);

    const onSearch = () => {
        console.log(keyword)
        LocationApi.getLocationList(keyword, 2)
        .then((res) => {
            console.log(res.data.documents)
            setData(res.data.documents)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <S.LocationListWrapper>
                <input onChange={(e) => setKeyword(e.target.value)}/>
                <button onClick={onSearch}>검색</button>
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