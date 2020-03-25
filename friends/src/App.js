import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import styled from 'styled-components'



function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Link to='/login'>Login</Link>
        <br>
        </br>
        <Link to='/friends'>Friends</Link>
      </div>
      <Switch>
      <PrivateRoute exact path="/friends" component={Friends} />
      <Route path ='/login' component ={Login} />
      <Route component={Login} />
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
