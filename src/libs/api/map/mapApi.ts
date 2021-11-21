import request from '../../axios'

export default {
    getFind(startLatitude: number, endLatitude: number, startLongitude: number, endLongitude: number){
        console.log(startLatitude, endLatitude, startLongitude, endLongitude)
        return request({
            url: `/find/map?endLatitude=${endLatitude}&startLatitude=${startLatitude}&startLongitude=${startLongitude}&endLongitude=${endLongitude}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getLost(startLatitude: number, endLatitude: number, startLongitude: number, endLongitude: number){
        return request({
            url: `/lost/map?endLatitude=${endLatitude}&startLatitude=${startLatitude}&startLongitude=${startLongitude}&endLongitude=${endLongitude}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getFindCategorySearch(category: string){
        return request({
            url: `/find/search/category/1?${category}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getFindTitleSearch(title: string){
        return request({
            url: `/find/search/title/1?${title}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getLostCategorySearch(category: string){
        return request({
            url: `/lost/search/category/1?${category}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getLostTitleSearch(title: string){
        return request({
            url: `/lost/search/title/1?${title}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
}