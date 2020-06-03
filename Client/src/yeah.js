import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "./context";

export default function Yeah(props) {
  let history = useHistory();
  const { setIsLogin } = useContext(Context);

  function handleClick(e) {
    // userHasAuthenticated(false); // set log out
    setIsLogin(false);
    history.push("/");
  }

  return (
    <div>
      <p>Yeah !!</p>
      <button onClick={(e) => handleClick(e)}>Log out</button>
    </div>
  );
}
