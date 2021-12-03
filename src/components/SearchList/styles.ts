import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../styles/Color";

export const SearchListWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'CookieRunRegular';
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
`


export const SearchListBox = styled.form`
    width: calc(100% - 20px);
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${color.gray200};
    border-radius: 5px;
    svg{
        width: 30px;
        height: 30px;
    }
`

export const SearchInput = styled.input`
    font-family: 'CookieRunRegular';
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 14px;
`


export const SearchBox = styled.div`
    width: 100%;
    border-bottom: 1px solid ${color.gray100};
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    cursor: pointer;
    :nth-of-type(1){
        border-top: 1px solid ${color.gray200};    
    }
`

export const PlaceName = styled.div`
    font-size: 15px;
    margin: 2px 10px;
    font-family: 'CookieRunBold';
    span{
        margin-left: 5px;
        font-size: 12px;
        color: ${color.gray400};
    }
`


export const Address = styled.div`
    font-size: 12px;
    margin: 2px 10px;
    font-family: 'CookieRunRegular';
    color: ${color.gray400};
`

export const PhoneNumber = styled.div`
    font-size: 12px;
    font-family: 'CookieRunRegular';
    margin: 2px 10px;
    color: blue;
`

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
`

export const Loading = styled.div`
    margin: 5% auto;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top: 5px solid #000;
    animation: ${spin} 0.7s infinite linear;
`
