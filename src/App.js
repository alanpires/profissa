import React from "react";
import Homepage from "./pages/homepage";
import Authentication from "./components/authentication";
import LoginModal from "./components/login-modal";
import JobsProfissa from "./components/feedbacks-profissa";

const App = () => {
  return (
    <div>
      {/* <Authentication /> */}
      {/* <LoginModal /> */}
      <JobsProfissa />
    </div>
  );
};

export default App;
