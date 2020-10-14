import React from 'react'
import Burguer from './Burguer.jsx'
import { StyledNav } from './style'

/*
interface {
  open: Boolean;
  showLogin: () => void;
}*/

const Nav = ({ open, showLogin, setShowLogin }) => {
    return (
    <>
        <StyledNav>
        <div className="logo">Profissa</div>
        <Burguer open={open} showLogin={showLogin} setShowLogin={setShowLogin} />
      </StyledNav>
    </>
    )
}

export default Nav