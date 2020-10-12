import React from "react";
import { useSelector } from "react-redux";
import Authentication from "./components/authentication";
import Homepage from "./pages/homepage";
import ProfessionalProfile from "./pages/professional-profile";

const App = () => {

  return (
    <div>
      <Authentication />
      {/* <ProfessionalProfile /> */}
    </div>
  );
};

export default App;
