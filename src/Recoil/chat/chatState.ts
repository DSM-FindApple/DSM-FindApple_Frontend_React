import { atom } from 'recoil'

export const chatMessageState = atom<any[]>({
    key: 'chatMessageState',
    default: []
})

export const chatState = atom<any>({
    key: 'chatState',
    default: []
})