import React from 'react';
import styled from '@emotion/styled'

const MyChat = () => {
  return (
    <>
        <MyChatWrapper>
          <MyChatDate>
            오후 8시 30분
          </MyChatDate>
          <MyChatBox>
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          </MyChatBox>
        </MyChatWrapper>
    </>
  );
}

export default MyChat;

export const MyChatWrapper = styled.div`
  clear: both;
  float: right;
  display: flex;
  margin: auto 0 0 auto;
  margin-top: 10px;
  margin-right: 10px;

`

export const MyChatBox = styled.div`
  max-width: 170px;
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 15px;
  box-sizing: border-box;
  font-family: 'CookieRunRegular';
  background-color: #FFF4CC;
`

export const MyChatDate = styled.div`
  font-size: 11px;
  font-family: 'CookieRunRegular';
  margin-left: 5px;
`