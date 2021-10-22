import React from 'react';
import * as S from './styles'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.InputBox>
          <S.Input />
          <S.Button>
            <BiSearch/>
          </S.Button>
        </S.InputBox>

        <S.TagBox>
          <S.Tag>이어폰</S.Tag>
          <S.Tag>휴대폰</S.Tag>
          <S.Tag>의류</S.Tag>
          <S.Tag>전자기기</S.Tag>
          <S.Tag>기타</S.Tag>
          <S.Tag>의류</S.Tag>
          <S.Tag>전자기기</S.Tag>
          <S.Tag>기타</S.Tag>
          <S.Tag>의류</S.Tag>
          <S.Tag>전자기기</S.Tag>
          <S.Tag>기타</S.Tag>
        </S.TagBox>

      </S.Wrapper>
    </>
  );
}

export default Header;