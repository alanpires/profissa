import React from "react";
import Authentication from "./components/authentication";
import Homepage from "./pages/homepage";

import './App.css'
import LoginModal from "./components/login-modal";
import JobsProfissa from "./components/feedbacks-profissa";
import Carousel from "./components/swiperCarousel";

const App = () => {
  return (
    <div>
      <Carousel />
      {/* <Homepage /> */}

      {/* <JobsProfissa /> */}
      {/* <Authentication /> */}
    </div>
  );
};

export default App;
