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

  useEffect(() => {
    console.log(`${process.env.REACT_APP_BASE_URL}/${findImages[0]}`)
    imageApi.getImage(findImages[0])
    .then((res) => {
      let bytes, blob;
      bytes = new Uint8Array(res.data);
      blob = new Blob([bytes], {type:'image/*'});
      let url = window.URL || window.webkitURL;
      let imgsrc = url.createObjectURL(blob);
      setImg(imgsrc);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [findImages])

  console.log(img)
  
  return (
    <>
      <S.InfoMarkerWrapper type={type}>
          <S.InfoHeader>
            <S.InfoTitle>{title}</S.InfoTitle>
            <GrClose width='25px' onClick={onClosrOverView}/>  
          </S.InfoHeader>
          <S.InfoAddress>{detail}</S.InfoAddress>
          <img src={`${img}`} alt="사진"/>
      </S.InfoMarkerWrapper>
    </>
  )
}

export default InfoMarker;