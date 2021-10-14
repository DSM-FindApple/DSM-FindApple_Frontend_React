import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import RootRouter from './Router/RootRouter';
import {Global} from '@emotion/react'

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RootRouter />
    </>
  );
}

export default App;
