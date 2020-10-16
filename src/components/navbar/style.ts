import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: absolute;
  top: 20px;
  width: 98%;
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

export const StyleImg = styled.img`
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
