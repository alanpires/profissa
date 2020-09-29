import React from "react";
import { Switch } from "react-router-dom";
import RoutersNotAuthenticated from "../route/routes/free-route";

const FreeNavigation = () => {
  return (
    <Switch>
      <RoutersNotAuthenticated />
    </Switch>
  );
};
export default FreeNavigation;
