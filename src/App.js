import React from "react";
import Homepage from "../src/components/homepage";
import Authentication from "./components/authentication";
import LoginModal from "./components/login-modal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SignUpClient from "./pages/signup-client";

const App = () => {
  return (
    <div>
      <Homepage />
      <Authentication />
      <LoginModal />
      <Router>
        <Switch>
          <Route component={SignUpClient} path="/signup-client" exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
