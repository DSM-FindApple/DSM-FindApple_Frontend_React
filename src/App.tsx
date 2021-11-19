import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import RootRouter from './Router/RootRouter';
import {Global} from '@emotion/react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

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
      <Global styles={GlobalStyle} />
      <RootRouter />
    </>
  );
}

export default App;
