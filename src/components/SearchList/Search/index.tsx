import React from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import mapApi from '../../../libs/api/map/mapApi';
import { useInfiniteScroll } from '../../../libs/hooks/useInfiniteScroll';
import { mapState } from '../../../Recoil/map/mapState';
import * as S from '../styles'

const Search = ({keyword, type}: any) => {
    const history = useHistory()
    const geocoder = new kakao.maps.services.Geocoder();
    const [data, loading, _] = useInfiniteScroll((page)=>mapApi.getFindTitleSearch(keyword, page), keyword, -1)
    const setCenter = useSetRecoilState(mapState)

    const onSearch = (lat: number, lng: number) => {
        setCenter({
            lat: lat,
            lng: lng
        })
        history.push(`/${type}`)
    }

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
                        <S.SearchBox key={i.kakaoId+'+'+index} onClick={() => onSearch(i.latitude, i.longitude)}>
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