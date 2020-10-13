import Homepage from "../../pages/homepage";
import ProfessionalProfile from "../../pages/profile";
import ProfessionalShowcase from "../../pages/professional-showcase";
import SignupClient from "../../pages/signup-client";
import SignupProfessional from "../../pages/singup-professional";

export const restrictedRoutes = [
  {
    path: "/professional-showcase/:id/:cep",
    name: "ProfessionalShowcase",
    component: ProfessionalShowcase,
  },
  {
    path: "/profile",
    name: "ProfessionalProfile",
    component: ProfessionalProfile,
  },
  { path: "/", name: "Homepage", component: Homepage },
];

export const freeRoutes = [
  {
    path: "/professional-showcase/:id/:cep",
    name: "ProfessionalShowcase",
    component: ProfessionalShowcase,
  },
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/signup-client", name: "SignupClient", component: SignupClient },

  {
    path: "/singup-professional",
    name: "SignupProfessional",
    component: SignupProfessional,
  },
];
