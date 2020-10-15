import React, { useState } from "react";
import styled from "styled-components";
import Burguer from "./Burguer";
import LoginModal from "../login-modal";
import Nav from './nav'

const Divcontainer = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Divcontainer onClick={() => setOpen(!open)}>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}

      <Nav open={open} showLogin={showLogin} setShowLogin={setShowLogin} />
       
    </Divcontainer>
  );
};

export default Navbar;
