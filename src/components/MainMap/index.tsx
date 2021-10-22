import React from 'react';
import { Map } from 'react-kakao-maps-sdk'
import KakaoMap from '../KakaoContainer/KakaoMap/KakaoMap';
import Header from './Header';
import * as S from './styles'

const MainMap = () => {
  return (
    <>
      <S.Wrapper >
        <Header/>
        <KakaoMap />
      </S.Wrapper>
    </>
  );
}

export default MainMap;