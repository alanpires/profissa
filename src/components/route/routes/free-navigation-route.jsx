import React from "react";
import { Route } from "react-router-dom";
import { freeRoutes } from "../helper";

const RoutersNotAuthenticated = () => {
  return freeRoutes.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default RoutersNotAuthenticated;
