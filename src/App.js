import React from "react";
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
    <>
      <Router>
        <Switch>
          <Route component={SignUpClient} path="/signup-client" exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
