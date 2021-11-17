import React from 'react';
import styled from '@emotion/styled'
import { color } from '../../../../styles/Color';

const PartnerChat = () => {
  return (
    <>
        <PartnerChatWrapper>
          <PartnerChatBox>
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          </PartnerChatBox>
          <PartnerChatDate>
            오후 8시 30분
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
`

export const PartnerChatBox = styled.div`
  max-width: 170px;
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 15px;
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