import React from 'react';
import { Map } from 'react-kakao-maps-sdk'
import KakaoMarker from '../KakaoContainer/KakaoMarker';
import KakaoMap from '../KakaoContainer/KakaoMap';
import Header from '../KakaoContainer/Header';
import * as S from './styles'

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

const LostMap = () => {
  return (
    <>
      <S.Wrapper >
        <Header/>
        <KakaoMap>
          {
                markerdata.map((data, index) => (
                    <>
                        <KakaoMarker
                            type="lost"
                            lat={data.lat} 
                            lng={data.lng} 
                            index={index}
                            title={data.title}
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

export default LostMap;