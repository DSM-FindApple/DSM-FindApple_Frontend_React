import React, { useEffect } from 'react';
import LocationApi from '../../../libs/api/Location/LocationApi';
import { useInfiniteScroll } from '../../../libs/hooks/useInfiniteScroll';
import * as S from '../styles'

const Location = ({keyword}: any) => {
    
    const [data, loading, last] = useInfiniteScroll((page)=>LocationApi.getLocationList(keyword, page), keyword)

    return (
        <>
            {
                data.map((i: any, index: any) => {
                    let category= i.category_name.split(' > ')
                    return (
                        <S.LocationBox key={i.id+'+'+index}>
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
            {
                loading && <S.Loading/>
            }
        </>
    );
}

export default Location;