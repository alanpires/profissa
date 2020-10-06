import React from "react";
import Authentication from "./components/authentication";
import ProfessionalShowcase from "./pages/professional-showcase";
import FeedbacksProfissa from "./components/feedbacks-profissa";

const App = () => {
  return (
    <div>
      {/* <Authentication /> */}
      <ProfessionalShowcase />
      <FeedbacksProfissa />
    </div>
  );
};

export default App;
