import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function onSubmit(e) {
    axios
      .post("http://localhost:8000/login", {
        username,
        password,
      })
      .then(function (response) {
        if (response.data === 1) {
          // setIsComplete(true);
          // return <Redirect to="/yeah" />
          // userHasAuthenticated(true); // set login
          history.push("/yeah");
        } else {
          // setIsComplete(false);
          // return <Redirect to="/"/>
          alert("Oh no!!");
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setPassword("");
    setUsername("");
    e.preventDefault();
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="form">
      <header className="App-header">
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            User name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => handleChangeUsername(e)}
            />
          </label>
          <hr></hr>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
          </label>
          <hr />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Login;
