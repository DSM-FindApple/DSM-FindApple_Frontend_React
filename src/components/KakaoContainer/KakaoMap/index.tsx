import React, { FC, ReactNode, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk'

interface Props {
  children: ReactNode;
}

const KakaoMap: FC<Props> = ({children}) => {
  const [ mapData, setMapData] = useState<any>([])
  const onCenter = (level: number, center: any, nePath: any, swPath: any ) => {
    setMapData({
        ...mapData, 
        center: {
            lat: center.Ma, 
            lng: center.La
        }, 
        level: level,
        swLatLng: {
            lat: swPath.Ma,
            lng: swPath.La,
          },
        neLatLng: {
            lat: nePath.Ma,
            lng: nePath.La,
        },
    })
}

    return (
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 36.39155703543644, 
            lng: 127.3633693928144,
          }}
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