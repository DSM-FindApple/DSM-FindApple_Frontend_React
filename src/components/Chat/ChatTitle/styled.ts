import styled from "@emotion/styled";
import { color } from "../../../styles/Color";

export const ChatTitleBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 500px;
    background-color: ${color.yellow500};
    height: 45px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        width: 30px;
        height: 25px;
    }
`

export const ChatPartner = styled.div`
    display: flex;
    font-size: 18px;
    font-family: 'CookieRunBold';
    svg{
        margin-left: 4px;
        width: 15px;
    }
`

export const Appointment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size: 10px;
        font-family: 'CookieRunRegular';
    }
`

export const ChatSetting = styled.div`
    position: absolute;
    top: 50px;
    left: 100%;
    transform: translateX(-100%);
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 99;
    div{
        padding: 5px;
        font-size: 13px;
        font-family: "CookieRunBold";
    }
`