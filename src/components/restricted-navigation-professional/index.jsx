import React from "react";
import { Switch } from "react-router-dom";

import RoutersAuthenticateProfessional from "../route/routes/restricted-navigation-route-professional";

const RestrictedNavigationProfessional = () => {
  return (
    <Switch>
      <RoutersAuthenticateProfessional />
    </Switch>
  );
};

export default RestrictedNavigationProfessional;
