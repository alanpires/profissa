import React from "react";
import Authentication from "./components/authentication";
import Homepage from "./pages/homepage";
import LoginModal from "./components/login-modal";

const App = () => {
  return (
    <div>
      {/* <Authentication /> */}
      <Homepage />
      <LoginModal />
    </div>
  );
};

export default App;
