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
    },
    getChatHistoryMessgage(chatId: string, pageNum: number){
        return request({
            url: `/message/${chatId}/${pageNum}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getPromise(){
        return request({
            url: '/promise',
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    getPromiseInfo(promiseId: number){
        return request({
            url: `/promise/${promiseId}`,
            method: 'get',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    postPromise(chatId: string, latitude: number, longitude: number, meetAt: string, script: string, targetId: number){
        return request({
            url: `/promise/${chatId}`,
            method: 'post',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            },
            data : {
                latitude: latitude,
                longitude: longitude,
                meetAt: meetAt,
                script: script,
                targetId: targetId
            }
        })
    },
    putPromiseAccept(promiseId: number){
        return request({
            url: `/promise/${promiseId}`,
            method: 'put',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            },
            data : {
                isAccept: true
            }
        })
    },
    postChatBan(kakaoId: number){
        return request({
            url: `/chat/ban/${kakaoId}`,
            method: 'post',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
    deleteChatBan(kakaoId: number){
        return request({
            url: `/chat/ban/${kakaoId}`,
            method: 'delete',
            headers : {
                Authorization: `${localStorage.getItem('access-token')}`
            }
        })
    },
}