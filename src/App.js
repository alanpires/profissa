import React from "react";
import Authentication from "./components/authentication";
import Homepage from "./pages/homepage";

import './App.css'
import LoginModal from "./components/login-modal";
import JobsProfissa from "./components/feedbacks-profissa";

const App = () => {
  return (
    <div>
      <Homepage />
      {/* <JobsProfissa /> */}
      <Authentication />
    </div>
  );
};

export default App;
