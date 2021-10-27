import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
  Chat,
  ChatList,
  LostMap,
  FindMap,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <Switch>
          <Route path='/lost' component={LostMap} exact/>
          <Route path='/find' component={FindMap} exact/>
          <Route path='/chatlist' component={ChatList} exact/>
          <Route path='/chat/:chatId' component={Chat} exact />
        </Switch>
    </>
  );
}

export default MainRouter;