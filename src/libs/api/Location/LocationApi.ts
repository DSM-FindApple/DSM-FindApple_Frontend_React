import request from '../../axios'

export default {
    getLocationList(keyword: any, page: number){
        return request({
            url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}&size=10&page=${page}`,
            method: 'get',
            headers : {
                Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_RESTAPI_KEY}`
            }
        })
    },
}