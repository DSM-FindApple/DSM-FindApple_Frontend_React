import React, { FC, useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { YellowMarker, BlueMarker } from '../../../assets';
import InfoMarker from './InfoMarker';

interface Props {
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
  type: string
  index: number
}

  const KakaoMarker: FC<Props> = (props) => {
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
    } = props
    const [ isShow, setIsShow ] = useState<boolean>(false)
    const [ sizeData, setSizeData ] = useState({width: 49, height: 54})

    const onOpenOverView = () => {
      setIsShow(true)
      setSizeData({width: 0, height: 0})
    }

    const onClosrOverView = () => {
      setIsShow(false)
      setSizeData({width: 49, height: 54})
    }

    return (
      <>
        <MapMarker
          image={{
            src: `${type === 'lost' ? YellowMarker : BlueMarker}`,
            size: {
              width: sizeData.width,
              height: sizeData.height,
            },
            
          }}

          position={{
            lat: latitude,
            lng: longitude,
          }}
          onClick={onOpenOverView}
        />
        {
          isShow &&
          <CustomOverlayMap
            position={{
              lat: latitude,
              lng: longitude,
            }}
            yAnchor={1}
          >
            <InfoMarker 
              onClosrOverView={() => onClosrOverView()} 
              {...props}
            />
          </CustomOverlayMap>
        }
      </>
    )
  }


export default KakaoMarker;