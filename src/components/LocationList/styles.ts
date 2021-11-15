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

export const LocationBox = styled.div`
    width: 100%;
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
    :nth-last-of-type(1){
        border-bottom: 1px solid black;    
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