import React from "react";
import Authentication from "./components/authentication";
import ProfessionalShowcase from "./pages/professional-showcase";
import FeedbacksProfissa from "./components/feedbacks-profissa";
import ClientProfile from "./pages/client-profile";
import Carousel from "./components/swiperCarousel";

const App = () => {
  return (
    <div>
      {/* <Authentication /> */}
      {/* <ProfessionalShowcase />
      <FeedbacksProfissa /> */}
      <Carousel />
    </div>
  );
};

export default App;
