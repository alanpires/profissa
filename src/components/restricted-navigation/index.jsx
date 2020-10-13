import React from "react";
import { Switch } from "react-router-dom";

import RoutersAuthenticate from "../route/routes/restricted-navigation-route";

const RestrictedNavigation = () => {
  return (
    <Switch>
      <RoutersAuthenticate />
    </Switch>
  );
};

export default RestrictedNavigation;
