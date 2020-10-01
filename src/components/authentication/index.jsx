import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FreeNavigation from "../free-navigation";
import RestrictedNavigationClient from "../restricted-navigation-client";
import RestrictedNavigationProfessional from "../restricted-navigation-professional";
import { useSelector } from "react-redux";

import { axiosConfig } from "../../components/login-modal/helper";
import axios from "axios";
// {
//   token: 'sfslfskdjflskdfjls',
//   user_type: 'professional'
// }
const Authentication = () => {
  const history = useHistory();
  const location = useLocation();
  const userType = useSelector((state) => state.access.user.userType);
  const token = useSelector((state) => state.access.token);

  useEffect(() => {
    console.log(token, userType);
    if (!token) {
      if (location.pathname === "/signup-client") {
        history.push("/signup-client");
      } else if (location.pathname === "/singup-professional") {
        history.push("/singup-professional");
      } else if (location.pathname === "/homepage") {
        history.push("/homepage");
      } else {
        history.push("/");
      }
    } else {
      if (token && userType === "professional") {
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

      if (token && userType === "client") {
        if (location.pathname === "/client-profile") {
          history.push("/client-profile");
        } else if (location.pathname === "/professional-showcase") {
          history.push("/professional-showcase");
        } else {
          history.push("/client-profile");
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return <FreeNavigation />;
  }
  if (token && userType === "professional") {
    return <RestrictedNavigationProfessional />;
  }
  if (token && userType === "client") {
    return <RestrictedNavigationClient />;
  }
  return <div>Loading</div>;
};
export default Authentication;
