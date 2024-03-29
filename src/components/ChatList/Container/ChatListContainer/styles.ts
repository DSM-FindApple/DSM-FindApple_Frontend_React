import styled from "@emotion/styled";
import {color} from '../../../../styles/Color'

interface Props {
    read: boolean,
}

export const ContainerWrapper = styled.div`
    width: calc(100% - 20px);
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    cursor: pointer;
    div{
        display: flex;
    }
`

export const ChatInfo = styled.div<Props>`
    display: flex;
    flex-direction: column;
    min-width: 180px;
    margin-left: 18px;
    div:nth-of-type(1) {
        font-size: 14.5px;
        font-family: 'CookieRunBold';
        color: ${(props) => props.read ? color.gray500 : color.gray300};
    }
    div:nth-of-type(2) {
        display:block;
        width: 150px;
        font-size: 10.5px;
        font-family: 'CookieRunRegular';
        color: ${(props) => props.read ? color.gray500 : color.gray200};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const NewChat = styled.div<Props>`
    visibility: ${(props) => props.read ? 'visible' : 'hidden' };
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${color.yellow500};
`