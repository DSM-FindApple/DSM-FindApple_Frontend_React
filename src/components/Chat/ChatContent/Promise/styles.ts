import styled from '@emotion/styled'

export const PromiseWrapper = styled.div<{isMy: string}>`
    clear: both;
    float: ${(props) => props.isMy};
    display: flex;
    flex-direction: column;
    margin: auto 0 0 auto;
    margin: 5px 10px;
    align-items: flex-end;
    :nth-of-type(0){
        margin-top: 10px;
    }
`

export const PromiseBox = styled.div<{isMy: string}>`
    width: 170px;
    padding: 7px 12px;
    border-radius: 10px;
    font-size: 15px;
    word-break: break-all;
    box-sizing: border-box;
    font-family: 'CookieRunRegular';
    background-color: ${(props) => props.isMy};
`

export const PromiseButton = styled.button`
    width: 100px;
    font-size: 15px;
    padding: 5px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 12px;
    border: none;
`