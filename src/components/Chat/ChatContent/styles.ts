import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100 - 105px);
    background-color: white;
    overflow: scroll;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    
`

export const AddMessage = styled.div`
    margin: 0 auto;
    margin-top: 3px;
    font-size: 11px;
    font-family: "CookieRunRegular";
`