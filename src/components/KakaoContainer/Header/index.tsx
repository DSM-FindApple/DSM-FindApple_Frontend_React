import * as S from './styles'
import { BiSearch } from 'react-icons/bi'
import { category } from '../../../libs/data/Category';
import { FC } from 'react';
import { useHistory } from 'react-router';

interface Props {
  type: string
}

const Header: FC<Props> = ({type}) => {
  
  const history = useHistory()

  const onSearch = () => {
    if(!(window as any).Lost || !(window as any).Find){
      history.push(`/search/${type}`)
    }else {
      if(type === 'lost'){
        (window as any).Lost.startSearch('lost')
      } else {
        (window as any).Find.startSearch('find')
      }
    }
  }


  return (
    <>
      <S.Wrapper>
        <S.InputBox onClick={onSearch}>
          <S.Input />
          <S.Button>
            <BiSearch/>
          </S.Button>
        </S.InputBox>

        <S.TagBox>
          {
            category.map((i,index) => {
              return (
                <S.Tag key={`${i.name}-${index}`}>
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