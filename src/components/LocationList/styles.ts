import styled from "@emotion/styled";
import { color } from "../../styles/Color";

export const LocationListWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const SearchBox = styled.form`
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
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 14px;
`


export const LocationBox = styled.div`
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
    span{
        margin-left: 5px;
        font-size: 12px;
        color: ${color.gray400};
    }
`


export const Address = styled.div`
    font-size: 12px;
    margin: 2px 10px;
    color: ${color.gray400};
`

export const PhoneNumber = styled.div`
    font-size: 12px;
    margin: 2px 10px;
    color: blue;
`