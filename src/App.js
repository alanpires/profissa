import React from "react";
import Homepage from "./pages/homepage";
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
      <Authentication />
    </div>
  );
};

export default App;
