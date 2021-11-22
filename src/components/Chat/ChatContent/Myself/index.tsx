import React, { FC } from 'react';
import styled from '@emotion/styled'
import { color } from '../../../../styles/Color';

interface Props {
  message: string
}

const MyChat: FC<Props> = ({message}) => {
  return (
    <>
        <MyChatWrapper>
          <MyChatDate>
            오후 8시 30분
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

`

export const MyChatBox = styled.div`
  max-width: 170px;
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 15px;
  word-break: break-all;
  box-sizing: border-box;
  font-family: 'CookieRunRegular';
  background-color: #FFF4CC;
`

export const MyChatDate = styled.div`
  font-size: 10px;
  color: ${color.gray300};
  font-family: 'CookieRunRegular';
  margin-right: 5px;
`