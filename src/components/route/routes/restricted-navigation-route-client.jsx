import React from "react";
import { Route } from "react-router-dom";
import { restrictedRoutesClient } from "../helper";

const RoutersAuthenticatedClient = () => {
  return restrictedRoutesClient.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default RoutersAuthenticatedClient;
