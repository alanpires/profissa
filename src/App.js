import React from "react";
import Homepage from "./pages/homepage";
import Authentication from "./components/authentication";
import LoginModal from "./components/login-modal";

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <Homepage /> */}
      <Authentication />
      {/* <LoginModal /> */}
      <Router>
        <Switch>
          <Route component={SignUpClient} path="/signup-client" exact />
          <Redirect to="/" />
        </Switch>
      </Router>
=======
      <Authentication />
      <LoginModal />
>>>>>>> master
    </div>
  );
};

export default App;
