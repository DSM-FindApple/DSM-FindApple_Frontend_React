import { atom, selector } from 'recoil';
import mapApi from '../../libs/api/map/mapApi';

interface fildLatLng {
    startLatitude: number;
    endLatitude: number;
    startLongitude: number;
    endLongitude: number
}

export const fildArticelState = atom<fildLatLng|any>({
    key: 'fildArticelState',
    default: []
})

export const fildArticleSeletor = selector({
    key: 'fildArticleState',
    get: async ({get}) => {
        const {startLatitude, endLatitude, startLongitude, endLongitude} = get(fildArticelState)
        let list = await mapApi.getFind(startLatitude, endLatitude, startLongitude, endLongitude)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

        return list;
    },
    // set: ({set}) => {
    //     set(fildArticelState, )
    // }
})