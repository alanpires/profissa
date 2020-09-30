import styled from "styled-components";

export const ContainerFlexHomePage = styled.div`
  display: flex;
  height: 7%;
`;

export const HeaderhomePage = styled.header`
  width: 100%;
`;

export const LogoH1homepage = styled.h1`
  position: absolute;
  margin-top: 22px;
  left: 2%;
  color: black;
`;

export const DivButtonsContainer = styled.div`
  position: absolute;
  right: 20%;
  top: 23px;
  #botton-sejaum-profissa {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const ButtonhomePage = styled.button`
  border-radius: 38px;
  border: none;
  padding: 10px 15px 10px 15px;
  margin-left: 10px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
`;

export const DivUserTop = styled.div`
  position: absolute;
  right: 20px;
  top: 14px;
  height: 60px;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 31px;
  p {
    position: absolute;
    top: 18px;
    left: 20px;
  }
`;

export const ImgProfileHeaderTopHomepage = styled.img`
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  right: 10px;
  top: 7px;
`;
