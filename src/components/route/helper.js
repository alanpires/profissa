import ClientProfile from "../../pages/client-profile";
import Homepage from "../../pages/homepage";
import ProfessionalProfile from "../../pages/professional-profile";
import ProfessionalShowcase from "../../pages/professional-showcase";
import Login from "../../pages/login";
import SignupClient from "../../pages/signup-client";
import SignupProfessional from "../../pages/singup-professional";

export const restrictedArea = [
  { path: "/client-profile", name: "ClientProfile", component: ClientProfile },
  { path: "/homepage", name: "Homepage", component: Homepage },
  {
    path: "/professional-profile",
    name: "ProfessionalProfile",
    component: ProfessionalProfile,
  },
  {
    path: "/professional-showcase",
    name: "ProfessionalShowcase",
    component: ProfessionalShowcase,
  },
];

export const freeArea = [
  { path: "/", name: "Login", component: Login },
  { path: "/signup-client", name: "SignupClient", component: SignupClient },
  {
    path: "/singup-professional",
    name: "SignupProfessional",
    component: SignupProfessional,
  },
];
