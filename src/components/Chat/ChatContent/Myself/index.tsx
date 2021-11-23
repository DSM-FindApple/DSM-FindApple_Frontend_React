import React, { FC } from 'react';
import styled from '@emotion/styled'
import { color } from '../../../../styles/Color';

interface Props {
  message: string,
  sendTime: string
}

const MyChat: FC<Props> = ({message,sendTime}) => {
  
  return (
    <>
        <MyChatWrapper>
          <MyChatDate>
            {sendTime}
          </MyChatDate>
          <MyChatBox>
            {message}
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
  align-items: flex-end;
`

export const MyChatBox = styled.div`
  max-width: 170px;
  min-height: 34px;
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 15px;
  word-break: break-all;
  box-sizing: border-box;
  font-family: 'CookieRunRegular';
  background-color: #FFF4CC;
  position: relative;
`

export const MyChatDate = styled.div`
  font-size: 10px;
  color: ${color.gray300};
  font-family: 'CookieRunRegular';
  margin-right: 5px;
`