import React, { useEffect, useState } from 'react';
import KakaoMarker from '../KakaoContainer/KakaoMarker';
import KakaoMap from '../KakaoContainer/KakaoMap';
import Header from '../KakaoContainer/Header';
import * as S from './styles'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fildArticelState, fildArticleSeletor } from '../../Recoil/fildArticleState/fildArticleState';
import mapApi from '../../libs/api/map/mapApi';

const markerdata = [
  {
    title: "대전역",
    lat: 36.33248155546412,
    lng: 127.4342002693787,
  },
  {
    title: "천리집",
    lat: 36.39496683963465,
    lng: 127.35156630094322,
  },
  {
    title: "감동헤어",
    lat: 36.38941522030629,
    lng: 127.34884929417515,
  },
  {
    title: "대덕대학교",
    lat: 36.390919558287464, 
    lng: 127.36545386937999,
  },
  {
    title: "금성초 병설",
    lat: 36.391286658188996, 
    lng: 127.34983550570026, 
  },
];

const FindMap = () => {
  const [ findAritcleData, setFindArticleData ] = useState<any>({
    startLatitude: 0,
    endLatitude: 0,
    startLongitude: 0,
    endLongitude: 0,
  });
  const [ findData, setFindData ] = useState<any>([markerdata]);

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