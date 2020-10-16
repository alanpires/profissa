import Homepage from "../../pages/homepage";
import ProfessionalProfile from "../../pages/profile";
import ProfessionalShowcase from "../../pages/professional-showcase";
import SignupClient from "../../pages/signup-client";
import ClientProfile from "../../pages/client-profile";

export const restrictedRoutes = [
  {
    path: "/professional-showcase/:id/:service",
    name: "ProfessionalShowcase",
    component: ProfessionalShowcase,
  },
  {
    path: "/profile",
    name: "ProfessionalProfile",
    component: ProfessionalProfile,
  },
  { path: "/", name: "Homepage", component: Homepage },
  {
    path: "/user-profile",
    name: "ClientProfile",
    component: ClientProfile,
  },
];

export const freeRoutes = [
  {
    path: "/professional-showcase/:id/:service",
    name: "ProfessionalShowcase",
    component: ProfessionalShowcase,
  },
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/signup-client", name: "SignupClient", component: SignupClient },
];
