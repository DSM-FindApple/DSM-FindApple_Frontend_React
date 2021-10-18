import styled from "@emotion/styled";
import { color } from "../../../styles/Color";

export const ChatTitleBox = styled.div`
    box-sizing: border-box;
    width: 100%;
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
    font-size: 18px;
    font-family: 'CookieRunBold';
`