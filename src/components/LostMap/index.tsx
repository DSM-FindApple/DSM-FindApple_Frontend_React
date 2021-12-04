import KakaoMarker from '../KakaoContainer/KakaoMarker';
import KakaoMap from '../KakaoContainer/KakaoMap';
import Header from '../KakaoContainer/Header';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import mapApi from '../../libs/api/map/mapApi';

const LostMap = () => {
  const [ lostAritcleData, setLostArticleData ] = useState<any>({
    startLatitude: 0,
    endLatitude: 0,
    startLongitude: 0,
    endLongitude: 0,
  });
  const [ lostData, setLostData ] = useState<any>([]);
  
  const history = useHistory()
  useEffect(() => {
    (window as any).backKeyPressed = new Event('backKey');
    (window as any).addEventListener('backKey',() => {history.push('/location')} )
  },[])

  useEffect(() => {
    const {startLatitude, endLatitude, startLongitude, endLongitude} = lostAritcleData
      mapApi.getLost(startLatitude, endLatitude, startLongitude, endLongitude)
      .then((res) => {
          console.log(res)
          setLostData(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
  },[ lostAritcleData ])

  return (
    <>
      <S.Wrapper >
        <Header type="lost"/>
        <KakaoMap setLatLng={setLostArticleData}>
          {
                lostData.map((data: any, index: number) => (
                    <>
                        <KakaoMarker
                            type="lost"
                            {...data}
                            index={index}
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