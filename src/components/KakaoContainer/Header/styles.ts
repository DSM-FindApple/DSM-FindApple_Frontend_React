import styled from '@emotion/styled'
import { color } from '../../../styles/Color'

export const Wrapper = styled.div`
  max-width: 500px;
  min-width: 320px;
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`

export const InputBox = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Input = styled.input`
  width: calc(100% - 50px);
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 7px #000;
  height: 38px;
  box-sizing: border-box;
  padding: 10px;
  margin-left: 11px;
  font-size: 14px;
  font-family: 'CookieRunRegular';
`

export const Button = styled.div`
  width: 40px;
  height: 40px;
  margin: 11px;
  background-color: #6CABDD;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 7px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg{
    width: 28px;
    height: 28px;
    color: white;
  }
`

export const TagBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  overflow: auto;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  :-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 0%, 0.1);
    border-radius: 100px;
  }
  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`

export const Tag = styled.span`
  white-space : nowrap;
  box-sizing: border-box;
  max-height: 31px;
  padding: 5px 11px;
  background-color: ${color.gray100};
  border-radius: 15px;
  box-shadow: 0px 2px 7px #000;
  margin: 0 5.5px;
  cursor: pointer;
  font-family: 'CookieRunRegular';
  display: flex;
  justify-content: space-between;
  align-items: center;
  :first-of-type {
    margin-left: 11px;
  }
  :nth-last-of-type(1){
    margin-right: 11px;
  }
  span {
    margin-left: 4px;
  }
`