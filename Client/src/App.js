import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Yeah from "./yeah";
import Login from "./login";
import Page404 from "./404";
import Provider from "./contextProvider";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Provider>
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
              <PrivateRoute>
                <Yeah />
              </PrivateRoute>
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
