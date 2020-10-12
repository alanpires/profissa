import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const MainDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-flow:column;
`;

export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  text-align:center;
  width: 100%;
  height: 100%;
  margin: 10% 0;
  cursor: pointer;
  &:hover {
    background-color: #5f93a9;
  }
`;

export const Titles = styled.h3`
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin:0;
`;

export const HomeIcon = styled(HiHome)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const logoutIcon = styled(RiLogoutBoxRLine)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content:center;
  width:100%;
`;

export const AnchorLogout = styled.a`
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;

export const ClickLogo = styled.a``;
