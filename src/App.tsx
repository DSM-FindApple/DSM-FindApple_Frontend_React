import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import RootRouter from './Router/RootRouter';
import {Global} from '@emotion/react'
import { Suspense, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RecoilRoot } from 'recoil';

function App() {
  const history = useHistory()
  useEffect(() => {
    window.addEventListener('LocationChoice', async (e) => {
      history.push('/location')
    })
    window.addEventListener('android', async (e) => {
      history.push('/location')
    })    
  },[])

  const LocationChoice = () => {
    history.push('/location')
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
