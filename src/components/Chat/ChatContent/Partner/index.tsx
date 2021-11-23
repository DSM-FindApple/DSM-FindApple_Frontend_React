import React, { FC } from 'react';
import styled from '@emotion/styled'
import { color } from '../../../../styles/Color';

interface Props {
  message: string,
  sendTime: string
}

const PartnerChat: FC<Props> = ({message, sendTime}) => {
  return (
    <>
        <PartnerChatWrapper>
          <PartnerChatBox>
            {message}
          </PartnerChatBox>
          <PartnerChatDate>
            {sendTime}
          </PartnerChatDate>
        </PartnerChatWrapper>
    </>
  );
}

export default PartnerChat;

export const PartnerChatWrapper = styled.div`
  clear: both;
  float: left;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  align-items: flex-end;
`

export const PartnerChatBox = styled.div`
  max-width: 170px;
  padding: 7px 12px;
  border-radius: 10px;
  min-height: 34px;
  font-size: 15px;
  word-break: break-all;
  box-sizing: border-box;
  font-family: 'CookieRunRegular';
  background-color: #E3E6EA;
`

export const PartnerChatDate = styled.div`
  font-size: 10px;
  color: ${color.gray300};
  font-family: 'CookieRunRegular';
  margin-left: 5px;
`