import React from "react";
import FreeNavigation from "./components/free-navigation";
import RestrictedNavigation from "./components/restricted-navigation";

const App = () => {
  return (
    <div>
      <FreeNavigation />
      <RestrictedNavigation />
    </div>
  );
};

export default App;
