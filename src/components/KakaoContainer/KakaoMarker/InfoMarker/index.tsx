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
    detail,
    findImages,
    title,
    onClosrOverView,
  } = props;

  console.log(img)
  
  return (
    <>
      <S.InfoMarkerWrapper type={type}>
          <S.InfoHeader>
            <S.InfoTitle>{title}</S.InfoTitle>
            <GrClose width='25px' onClick={onClosrOverView}/>  
          </S.InfoHeader>
          <S.InfoAddress>{detail}</S.InfoAddress>
      </S.InfoMarkerWrapper>
    </>
  )
}

export default InfoMarker;