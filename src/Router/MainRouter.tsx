import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  Chat,
  ChatList,
  LostMap,
  FindMap,
 } from '../components';

const MainRouter = () => {

  return (
    <>
        <Switch>
          <Route path='/lost' component={LostMap} exact/>
          <Route path='/find' component={FindMap} exact/>
          <Route path='/chatlist' component={ChatList} exact/>
          <Route path='/chat' component={Chat} exact />
        </Switch>
    </>
  );
}

export default MainRouter;