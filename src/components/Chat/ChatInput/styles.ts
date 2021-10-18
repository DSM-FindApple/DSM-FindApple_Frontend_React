import styled from "@emotion/styled";
import { color } from "../../../styles/Color";

export const ChatInputBox = styled.div`
    height: 60px;
    width: 100%;
    background-color: ${color.yellow500};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 100%;
    transform: translateY(-100%);
    max-width: 500px;
`

export const InputBox = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    svg{
        margin: 0 9px;
        width: 30px;
        height: 25px;
        cursor: pointer;
    }
`

export const ChatInput = styled.input`
    font-size: 14px;
    font-family: 'CookieRunRegular';
    outline: none;
    border: none;
    width: calc(100% - 65px);
`

export const SendChatButton = styled.button`
    width: 55px;
    height: 40px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    cursor: pointer;
    svg{
        width: 28px;
        height: 28px;
    }
`