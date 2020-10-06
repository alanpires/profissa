import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const MainDiv = styled.div`
  height: 604px;
  width: 351px;
  left: 18px;
  top: 359px;
  border-radius: 0px;
  background-color: #ffffff;
  margin-top: 22px;
  margin-left: 16px;
`;

export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding: 10px;
  width: fit-content;

  cursor: pointer;
  &:hover {
    background-color: #5f93a9;
    border-radius: 10px;
    width: 80%;
  }

  @media (max-width: 720px) {
    padding: 10px;
  }
`;

export const Titles = styled.h3`
  margin-left: 20px;
  font-weight: 600;
  padding-top: 10px;
  font-family: "Roboto", sans-serif;
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

export const BookIcon = styled(BsSearch)`
  height: 35px;
  width: 35px;
  color: white;

  @media (max-width: 280px) {
    height: 32px;
    width: 32px;
  }
`;

export const ShelfIcon = styled(GiBookshelf)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const ProfileIcon = styled(BsFillPersonFill)`
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
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    margin-top: 14px;
    margin-bottom: 14px;
  }
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
