import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDefault from "./userDefault.jpg";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .div-usernavbar {
    display: flex;
    width: 120px;
    margin-left: 30px;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(64, 71, 109, 0.39);
    border-radius: 18px;
    &:hover {
      background-color: rgba(64, 71, 109, 0.54);
      cursor: pointer;
    }
    p {
      margin-left: 15px;
      font-size: 14px;
      font-family: Poppins;
    }
    img {
      margin-right: 10px;
      border-radius: 18px;
      width: 50px;
    }
  }

  @media (min-width: 769px) {
    li {
      font-family: Poppins;
      background-color: rgba(64, 71, 109, 0.39);
      padding: 18px 10px;
      font-size: 13px;
      border-radius: 18px;
      margin-left: 15px;
      color: black;

      div {
        display: flex;
        width: 50px;
        height: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    z-index: 15;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    background-color: #40476d;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      width: 100%;
      display: flex;
      margin-top: 14px;
      justify-content: center;
      background-color: #2f365e;
      font-family: Poppins;
      padding: 18px 10px;
      color: #fff;
      font-size: 14px;
      &:hover {
        background-color: rgba(64, 71, 109, 0.54);
        cursor: pointer;
      }
    }
    .div-usernavbar {
      display: flex;
      width: 100%;
      z-index: 500;
      margin-top: 14px;
      margin-left: 0px;
      background-color: #2f365e;
      border-radius: 0px;
      justify-content: center;
      &:hover {
        background-color: rgba(64, 71, 109, 0.54);
        cursor: pointer;
      }
      p {
        color: white;
        margin-right: 14px;
        font-size: 14px;
        font-family: Poppins;
      }
      img {
        margin-right: 10px;
        border-radius: 18px;
        width: 50px;
      }
    }
  }
`;

const RightNav = ({ open, setShowLogin, showLogin }) => {
  const history = useHistory();
  const storeHome = useSelector((state) => state);
  const userLoged = storeHome.access.user.name;
  const token = useSelector((state) => state.access.token);
  const user = useSelector((state) => state.access.user);

  console.log(user.select);

  return (
    <Ul open={open}>
      {!token && <li onClick={() => setShowLogin(!showLogin)}>Login</li>}
      {!token && (
        <li onClick={() => history.push("/signup-client")}>Cadastro</li>
      )}
      {userLoged && (
        <div
          className="div-usernavbar"
          onClick={() => history.push("/profile")
          }
        >
          <p>{userLoged}</p>
          <img className="photo-navbar" src={UserDefault} />
        </div>
      )}
    </Ul>
  );
};

export default RightNav;
