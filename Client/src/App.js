import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Yeah from './yeah';
import Login from './login';

function App() {

  return (
    <Router>
      {/* { isComplete && <Redirect to="/yeah" />}
      {!isComplete && <Redirect to="/"/>} */}
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/yeah">Yeah</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/yeah">
            <Yeah />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
