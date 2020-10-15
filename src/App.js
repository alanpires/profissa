import React from "react";
import { useSelector } from "react-redux";
import Authentication from "./components/authentication";
import Homepage from "./pages/homepage";
import Profile from "./pages/profile";

import "./App.css"

const App = () => {

  return (
    <div>
      <Authentication />
    </div>
  );
};

export default App;
