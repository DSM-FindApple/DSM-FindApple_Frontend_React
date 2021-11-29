import react, { useEffect, useState } from 'react'

export const useLocationSearch = (lat: any, lng: any) => {
    const [ address, setAddress ] = useState();
    const geocoder = new kakao.maps.services.Geocoder();

    useEffect(() => {
        searchDetailAddrFromCoords({x: lng, y: lat}, function(result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
                console.log(result)
                !!result[0].road_address ? setAddress(result[0].road_address.address_name)
                : setAddress(result[0].address.address_name)
            }  
        })
    }, []);

    function searchDetailAddrFromCoords(coords: any, callback: any) {
        (geocoder as any).coord2Address(coords.x, coords.y, callback);
    }

    return address
}