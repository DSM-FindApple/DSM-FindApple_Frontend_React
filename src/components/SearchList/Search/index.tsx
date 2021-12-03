import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import chatApi from '../../../libs/api/chat/chatApi';
import LocationApi from '../../../libs/api/Location/LocationApi';
import mapApi from '../../../libs/api/map/mapApi';
import { useInfiniteScroll } from '../../../libs/hooks/useInfiniteScroll';
import { chatState } from '../../../Recoil/chat/chatState';
import * as S from '../styles'

const Search = ({keyword, type}: any) => {
    const chatUserState = useRecoilValue(chatState)
    const geocoder = new kakao.maps.services.Geocoder();
    const [data, loading, last] = useInfiniteScroll((page)=>mapApi.getFindTitleSearch(keyword, page), keyword, -1)
    console.log(data, 'ㅁㄴㅇ')
    

    return (
        <>
            {
                data.map((i: any, index: any) => {
                    let address;
                    (geocoder as any).coord2Address(i.longitude, i.latitude, function(result: any, status: any) {
                        if (status === kakao.maps.services.Status.OK) {
                            !!result[0].road_address ? address=result[0].road_address.address_name
                            : address=result[0].address.address_name
                        }  
                    })
                    return (
                        <S.SearchBox key={i.kakaoId+'+'+index}>
                            <S.PlaceName>
                                {i.title}
                            </S.PlaceName>
                            <S.Address>{i.detail}</S.Address>
                            <S.Address>{address}</S.Address>
                            <S.Address>{i.findAt}</S.Address>
                        </S.SearchBox>
                    )
                })
            }
            {
                loading && <S.Loading/>
            }
        </>
    );
}

export default Search;