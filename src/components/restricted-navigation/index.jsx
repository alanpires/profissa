import React from "react";
import { Switch } from "react-router-dom";
import RoutersAuthenticated from "../route/routes/restricted-route";

const RestrictedNavigation = () => {
  return (
    <Switch>
      <RoutersAuthenticated />
    </Switch>
  );
};

export default RestrictedNavigation;
