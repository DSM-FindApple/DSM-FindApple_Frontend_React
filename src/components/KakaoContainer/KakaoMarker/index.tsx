import React, { FC, useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { YellowMarker, BlueMarker } from '../../../assets';
import InfoMarker from './InfoMarker';

interface Props {
  lat: number,
  lng: number,
  index: number,
  title: string,
  type: string,
}

  const KakaoMarker: FC<Props> = ({lat, lng, index, title, type}) => {
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
            lat: lat,
            lng: lng,
          }}
          onClick={onOpenOverView}
        />
        {
          isShow &&
          <CustomOverlayMap
            position={{
              lat: lat,
              lng: lng,
            }}
            yAnchor={1}
          >
            <InfoMarker onClosrOverView={() => onClosrOverView()} type={type}/>
          </CustomOverlayMap>
        }
      </>
    )
  }


export default KakaoMarker;