import React from "react";
import { Route } from "react-router-dom";
import { freeArea } from "../helper";

const FreeRouters = () => {
  return freeArea.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default FreeRouters;
