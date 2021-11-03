import React from 'react';
import { BrowserRouter }  from 'react-router-dom'
import MainRouter from './MainRouter';

const RootRouter = () => {
  return (
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainRouter />  
        </BrowserRouter>
    </>
  );
}

export default RootRouter;