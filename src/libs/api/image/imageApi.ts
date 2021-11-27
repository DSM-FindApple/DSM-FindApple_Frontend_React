import request from '../../axios'

export default {
    getImage(imageName: string){
        return request({
            url: `/image/${imageName}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    }
}