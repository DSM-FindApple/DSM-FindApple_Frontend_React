import React, { useEffect, useState } from 'react';
import KakaoMarker from '../KakaoContainer/KakaoMarker';
import KakaoMap from '../KakaoContainer/KakaoMap';
import Header from '../KakaoContainer/Header';
import * as S from './styles'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fildArticelState, fildArticleSeletor } from '../../Recoil/fildArticleState/fildArticleState';
import mapApi from '../../libs/api/map/mapApi';

const FindMap = () => {
  const [ findAritcleData, setFindArticleData ] = useState<any>({
    startLatitude: 0,
    endLatitude: 0,
    startLongitude: 0,
    endLongitude: 0,
  });
  const [ findData, setFindData ] = useState<any>([]);

  useEffect(() => {
    const {startLatitude, endLatitude, startLongitude, endLongitude} = findAritcleData
      mapApi.getFind(startLatitude, endLatitude, startLongitude, endLongitude)
      .then((res) => {
          console.log(res)
          setFindData(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
  },[ findAritcleData ])


  return (
    <>
      <S.Wrapper >
        <Header type="find"/>
        <KakaoMap setLatLng={setFindArticleData}>
          {
                findData.map((data: any, index: number) => (
                    <>
                        <KakaoMarker
                            type="find"
                            {...data} 
                            index={index}
                            key={`EventMarkerContainer-${data.lat}-${data.lng}`}
                        />
                    </>
                ))
            }
        </KakaoMap>
      </S.Wrapper>
    </>
  );
}

export default FindMap;