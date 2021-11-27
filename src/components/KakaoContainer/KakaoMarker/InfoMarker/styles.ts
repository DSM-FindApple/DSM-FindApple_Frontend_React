import styled from '@emotion/styled';
import {YellowSpeechBubble,BlueSpeechBubble} from '../../../../assets';

interface Props {
    type: string
}

export const InfoMarkerWrapper = styled.div<Props>`
    background-image: url(${(props) => props.type === 'lost' ? YellowSpeechBubble : BlueSpeechBubble});
    background-size: 250px 250px;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    padding: 13px 9px;
    font-size: 18px;
    img{
        height: 150px;
        object-fit: contain;
    }
`

export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfoTitle = styled.div`
    font-family: "CookieRunBold";
    font-size: 18px;
`

export const InfoAddress = styled.div`
    font-family: "CookieRunRegular";
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`