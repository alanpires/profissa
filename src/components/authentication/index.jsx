import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FreeNavigation from "../free-navigation";
import RestrictedNavigationClient from "../restricted-navigation-client";
import RestrictedNavigationProfessional from "../restricted-navigation-professional";
import { useSelector } from "react-redux";

const Authentication = () => {
  const history = useHistory();
  const location = useLocation();
  const userType = useSelector((state) => state.access.user.select);
  const token = useSelector((state) => state.access.token);

  useEffect(() => {
    console.log(userType);
    if (!token) {
      if (location.pathname === "/signup-client") {
        history.push("/signup-client");
      } else {
        history.push("/");
      }
    } else {
      if (token && userType) {
        if (userType[0] === "Profissa") {
          if (location.pathname === "/professional-profile") {
            history.push("/professional-profile");
          } else if (location.pathname === "/schedule") {
            history.push("/schedule");
          } else if (location.pathname === "/feedbacks") {
            history.push("/feedbacks");
          } else {
            history.push("/professional-profile");
          }
        }
        if (userType[0] === "Cliente") {
          if (location.pathname === "/client-profile") {
            history.push("/client-profile");
          } else if (location.pathname === "/professional-showcase") {
            history.push("/professional-showcase");
          } else {
            history.push("/client-profile");
          }
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return <FreeNavigation />;
  } else if (token && userType) {
    if (userType[0] === "Profissa") {
      return <RestrictedNavigationProfessional />;
    } else if (userType[0] === "Cliente") {
      return <RestrictedNavigationClient />;
    }
  }
  return <div>Loading</div>;
};
export default Authentication;
