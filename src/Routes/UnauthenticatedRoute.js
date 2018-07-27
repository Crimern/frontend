import React from "react";
import {Route, Redirect} from "react-router-dom";
import {querystring} from "../helpers/urlHelpers";

export default ({component: C, props: cProps, ...rest}) => {
  const redirect = querystring("redirect");

  return (
    <Route
      {...rest}
      render={props =>
        !cProps.isAuthenticated ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={redirect === "" || redirect === null ? "/" : redirect}
          />
        )
      }
    />
  );
};
