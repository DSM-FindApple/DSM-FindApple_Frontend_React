import request from '../../axios'

export default {
    getChatList(){
        return request({
            url: '/chat/0',
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    }
}