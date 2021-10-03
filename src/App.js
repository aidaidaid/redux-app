import React from 'react';
import Home from './components/home';
import Users from './components/usersList';
import Header from './components/header';
import './App.css';
import { Route, Switch } from 'react-router';

const App = ({}) => {
  return(
    <>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={Users}/>
    </Switch>
    </>
  )
}

export default App;
