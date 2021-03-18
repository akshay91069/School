import React from "react";
import { Redirect, Route } from "react-router-dom";
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default PrivateRoute;
