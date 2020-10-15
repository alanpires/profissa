import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FreeNavigation from "../free-navigation";
import RestrictedNavigation from "../restricted-navigation";
import { useSelector } from "react-redux";

const Authentication = () => {
  const history = useHistory();
  const location = useLocation();
  const userSelect = useSelector((state) => state.access.user.select);
  const token = useSelector((state) => state.access.token);

  useEffect(() => {
    if (!token) {
      if (location.pathname === "/signup-client") {
        history.push("/signup-client");
      } else if (location.pathname === "/professional-showcase") {
        history.push("/professional-showcase");
      } else {
        history.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return <FreeNavigation />;
  } else if (token && userSelect) {
    return <RestrictedNavigation />;
  }
  return <div>Loading</div>;
};
export default Authentication;
