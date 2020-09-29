import React from "react";
import { Route } from "react-router-dom";
import { restrictedArea } from "../helper";

const RestrictedRouters = () => {
  return restrictedArea.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default RestrictedRouters;
