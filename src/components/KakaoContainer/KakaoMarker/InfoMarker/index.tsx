import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import * as S from './styles'
import { GrClose } from 'react-icons/gr'
import imageApi from '../../../../libs/api/image/imageApi';

interface Props {
  onClosrOverView: () => void,
  type: string,
  category: string
  detail: string
  findAt: string
  findId: number
  findImages: string[]
  findUser: string
  kakaoId: number
  latitude: number
  longitude: number
  profileUrl: string
  title: string
  topComment: string | null
  writeAt: string
  index: number
}

const InfoMarker: FC<Props> = (props) => {
  const [img, setImg] = useState<any>('')
  const {
    type,
    category,
    detail,
    findAt,
    findId,
    findImages,
    findUser,
    kakaoId,
    latitude,
    longitude,
    profileUrl,
    title,
    topComment,
    writeAt,
    onClosrOverView,
  } = props;

  useEffect(() => {
    imageApi.getImage(findImages[0])
    .then((res) => {
      setImg(atob(unescape(encodeURIComponent(res.data))))
    })
    .catch((err) => {
      console.log(err)
    })
  }, [findImages])
  
  return (
    <>
      <S.InfoMarkerWrapper type={type}>
          <S.InfoHeader>
            <S.InfoTitle>{title}</S.InfoTitle>
            <GrClose width='25px' onClick={onClosrOverView}/>  
          </S.InfoHeader>
          <S.InfoAddress>{detail}</S.InfoAddress>
          <img src={findImages[0]} alt="사진"/>
      </S.InfoMarkerWrapper>
    </>
  )
}

export default InfoMarker;