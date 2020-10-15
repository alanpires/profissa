import React from 'react'
import Burguer from './Burguer.jsx'
import { StyledNav } from './style'

interface Props {
  open: Boolean;
  showLogin: () => void;
  setShowLogin: () => void;
}

const Nav = ({ open, showLogin, setShowLogin } : Props) => {
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