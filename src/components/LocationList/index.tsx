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
                        return (
                            <div key={i.id}>
                                <div>{i.place_name}</div>
                                <div>{i.address_name}</div>
                            </div>
                        )
                    })
                }
            </S.LocationListWrapper>
        </>
    );
}

export default LocationList;