import React from "react";
import { Switch } from "react-router-dom";
import RoutersAuthenticatedClient from "../route/routes/restricted-navigation-route-client";

const RestrictedNavigationClient = () => {
  return (
    <Switch>
      <RoutersAuthenticatedClient />
    </Switch>
  );
};

export default RestrictedNavigationClient;
