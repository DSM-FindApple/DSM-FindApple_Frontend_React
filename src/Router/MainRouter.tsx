import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  Chat,
  ChatList,
  LostMap,
  FindMap,
  LocationList,
  SearchList,
 } from '../components';
import Promise from '../components/Promise';


const MainRouter = () => {

  return (
    <>
        <Switch>
          <Route path='/lost' component={LostMap} exact/>
          <Route path='/find' component={FindMap} exact/>
          <Route path='/chatlist' component={ChatList} exact/>
          <Route path='/chat' component={Chat} exact />
          <Route path='/location' component={LocationList} exact />
          <Route path='/test' component={Promise} exact />
          <Route path='/search' component={SearchList} exact />
        </Switch>
    </>
  );
}

export default MainRouter;