import React, { FC, ReactNode, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk'
import { useRecoilState } from 'recoil';
import { mapState } from '../../../Recoil/map/mapState';

interface ILatLng {
  startLatitude: number,
  endLatitude: number,
  startLongitude: number,
  endLongitude: number,
}

interface Props {
  children: ReactNode;
  setLatLng: (e: ILatLng) => void
}

const KakaoMap: FC<Props> = ({children, setLatLng}) => {
  const [ center, setCenter ] = useRecoilState(mapState)
  const onCenter = (level: number, center: any, nePath: any, swPath: any ) => {
    setLatLng({
      startLatitude: swPath.Ma,
      endLatitude: nePath.Ma,
      startLongitude: swPath.La,
      endLongitude: nePath.La,
    })
  }

  (window as any).currentLocation = function(latitude: number, longuitude: number) {
    setCenter({
      lat: latitude,
      lng: longuitude,
    })
  }

    return (
        <Map // 지도를 표시할 Container
          center={{
            lat: center.lat,
            lng: center.lng
          }}
          isPanto={true}
          style={{
            // 지도의 크기
            width: "100vw",
            height: "100vh",
          }}
          level={3} // 지도의 확대 레벨
          onDragEnd={(map) => onCenter(map.getLevel(), map.getCenter(), map.getBounds().getNorthEast(), map.getBounds().getSouthWest()) }
          onZoomChanged={(map) => onCenter(map.getLevel(), map.getCenter(), map.getBounds().getNorthEast(), map.getBounds().getSouthWest()) }
        >
            {children}
        </Map>
        
    )
}

export default KakaoMap;