import React, { useState } from "react";
import styled from "styled-components";
import Burguer from "./Burguer";
import LoginModal from "../login-modal";

const Nav = styled.nav`
  position: absolute;
  top: 20px;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    margin-top: -3px;
    font-family: Poppins;
    font-size: 36px;
    color: #40476d;
    margin-left: 15px;
  }
`;

const Divcontainer = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Divcontainer>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}

      <Nav>
        <div className="logo">Profissa</div>
        <Burguer showLogin={showLogin} setShowLogin={setShowLogin} />
      </Nav>
    </Divcontainer>
  );
};

export default Navbar;
