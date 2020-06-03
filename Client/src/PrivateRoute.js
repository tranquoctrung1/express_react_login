import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Context from "./context";

PrivateRoute.propTypes = {};

function PrivateRoute(props) {
  const { isLogin } = useContext(Context);
  const { children } = props;

  return (
    <div>
      {/* if isLogin is true render children if not redirect to login page (home page) */}
      {isLogin && children}
      {!isLogin && (
        <Route>
          <Redirect to={{ pathname: "/" }} />
        </Route>
      )}
    </div>
  );
}

export default PrivateRoute;
