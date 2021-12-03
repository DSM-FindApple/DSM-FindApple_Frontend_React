import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import RootRouter from './Router/RootRouter';
import {Global} from '@emotion/react'
import { Suspense, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RecoilRoot } from 'recoil';

function App() {

  (window as any).sendToken = function(token: string) {
    localStorage.setItem('access-token', token)
  }
  
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>...loading</div>}>
          <Global styles={GlobalStyle} />
          <RootRouter />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
