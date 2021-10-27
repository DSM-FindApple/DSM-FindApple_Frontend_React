import React from 'react';
import * as S from './styles'
import { BiSearch } from 'react-icons/bi'
import { category } from '../../../libs/data/Category';

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
          {
            category.map((i,index) => {
              return (
                <S.Tag>
                  <img src={i.img} alt={i.name} />
                  <span>{i.name}</span>
                </S.Tag>
              )
            })
          }
        </S.TagBox>

      </S.Wrapper>
    </>
  );
}

export default Header;