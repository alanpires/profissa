import React from "react";
import { Route } from "react-router-dom";
import { restrictedRoutes } from "../helper";

const RoutersAuthenticate = () => {
  return restrictedRoutes.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default RoutersAuthenticate;
