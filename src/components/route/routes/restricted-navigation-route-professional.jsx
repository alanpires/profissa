import React from "react";
import { Route } from "react-router-dom";
import { restrictedRoutesProfessional } from "../helper";

const RoutersAuthenticateProfessional = () => {
  return restrictedRoutesProfessional.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default RoutersAuthenticateProfessional;
