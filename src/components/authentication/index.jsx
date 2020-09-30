import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FreeNavigation from "../free-navigation";
import RestrictedNavigationClient from "../restricted-navigation-client";
import RestrictedNavigationProfessional from "../restricted-navigation-professional";

// {
//   token: 'sfslfskdjflskdfjls',
//   user_type: 'professional'
// }

const Authentication = () => {
  const history = useHistory();
  const location = useLocation();
  const token = true;
  const userType = "professional";

  useEffect(() => {
    console.log(token, userType);
    if (!token) {
      if (location.pathname === "/signup-client") {
        history.push("/signup-client");
      } else if (location.pathname === "/singup-professional") {
        history.push("/singup-professional");
      } else {
        history.push("/");
      }
    } else {
      // axios.get("https").then(() => {
      if (
        token && // === window.localStorage.getItem("token")
        userType === "professional"
      ) {
        if (location.pathname === "/homepage") {
          history.push("/homepage");
        } else if (location.pathname === "/professional-profile") {
          history.push("/professional-profile");
        }
      } else if (
        token && // === window.localStorage.getItem("token")
        userType === "client"
      ) {
        if (location.pathname === "/homepage") {
          history.push("/homepage");
        } else if (location.pathname === "/client-profile") {
          console.log(userType);
          history.push("/client-profile");
        } else if (location.pathname === "/professional-showcase") {
          history.push("/professional-showcase");
        }
      }
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userType]);

  if (!token) {
    return <FreeNavigation />;
  }

  if (token && userType === "professional") {
    return <RestrictedNavigationProfessional />;
  }

  if (token && userType === "client") {
    return <RestrictedNavigationClient />;
  }
};

export default Authentication;
