import React, { FC } from 'react';
import { useHistory } from 'react-router';
import chatApi from '../../../libs/api/chat/chatApi';
import LocationApi from '../../../libs/api/Location/LocationApi';
import { useInfiniteScroll } from '../../../libs/hooks/useInfiniteScroll';
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

interface Props {
    keyword: string,
    chatId: string,
    date: string,
    targetId: number
}

const Location: FC<Props> = ({keyword, chatId, date, targetId}) => {
    const history = useHistory()
    const [data, loading, _] = useInfiniteScroll((page)=>LocationApi.getLocationList(keyword, page), keyword, 0);
    
    const onLocationChoice = (i: ILocation) => {
        if(window.confirm(`${i.place_name}을/를 선택하시겠습니까?`)){
            chatApi.postPromise(chatId, parseFloat(i.y), parseFloat(i.x), `${date}:00.000Z`, "약속을 잡아요", targetId)
            .then((res) => {
                history.push(`/chat?id=${chatId}`)
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