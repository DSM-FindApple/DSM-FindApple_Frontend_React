import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import chatApi from '../../../libs/api/chat/chatApi';
import LocationApi from '../../../libs/api/Location/LocationApi';
import { useInfiniteScroll } from '../../../libs/hooks/useInfiniteScroll';
import { chatState } from '../../../Recoil/chat/chatState';
import * as S from '../styles'

interface ILocation {
    address_name: string
    category_group_code: string
    category_group_name: string
    category_name: string
    distance: string
    id: string
    phone: string
    place_name: string
    place_url: string
    road_address_name: ""
    x: string
    y: string
}

const Location = ({keyword}: any) => {
    const chatUserState = useRecoilValue(chatState)
    const [data, loading, last] = useInfiniteScroll((page)=>LocationApi.getLocationList(keyword, page), keyword, 0)

    const chatIdTest = "daa4bbd6-d4ac-42b2-8120-2c85e81c76d4"
    
    const onLocationChoice = (i: ILocation) => {
        if(window.confirm(`${i.place_name}을/를 선택하시겠습니까?`)){
            chatApi.postPromise(chatIdTest, parseFloat(i.y), parseFloat(i.x), "2021-12-25T13:13:45.635Z", "약속", 1940044301)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            {
                data.map((i: any, index: any) => {
                    let category=i.category_name.split(' > ')
                    return (
                        <S.LocationBox key={i.id+'+'+index} onClick={() => onLocationChoice(i)}>
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