import { atom } from 'recoil'

export const mapState = atom({
    key: 'mapState',
    default: {
        lat: 36.39155703543644, 
        lng: 127.3633693928144,
    }
})