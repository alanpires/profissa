import React from "react";
import Homepage from "../src/components/homepage";
import Authentication from "./components/authentication";
import LoginModal from "./components/login-modal";

const App = () => {
  return (
    <div>
      <Homepage />
      <Authentication />
      <LoginModal />
    </div>
  );
};

export default App;
