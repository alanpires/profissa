import React from "react";
import Homepage from "./pages/homepage";
import Authentication from "./components/authentication";
import LoginModal from "./components/login-modal";

const App = () => {
  return (
    <div>
      <Authentication />
      {/* <Homepage /> */}
      <LoginModal />
    </div>
  );
};

export default App;
