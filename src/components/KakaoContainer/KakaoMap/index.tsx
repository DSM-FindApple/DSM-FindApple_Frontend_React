import React, { Children, FC, ReactChild, ReactChildren, ReactNode } from 'react';
import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk'

interface Props {
  children: ReactNode;
}

const KakaoMap: FC<Props> = ({children}) => {
    const [ seleteMarker ,setSeleteMarker ] = useState<number>()

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
        >
            {children}
        </Map>
        
    )
}

export default KakaoMap;