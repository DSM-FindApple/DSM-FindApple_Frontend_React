import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import RootRouter from './Router/RootRouter';
import {Global} from '@emotion/react'
import { Suspense, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { tokenState } from './Recoil/auth/authState';

function App() {
  const setToken = useSetRecoilState(tokenState);

  (window as any).sendToken = function(token: string) {
    localStorage.setItem('access-token', token)
    setToken(token)
  }
  
  return (
    <>
      <Global styles={GlobalStyle} />
      <RootRouter />
    </>
  );
}

export default App;
