import styled from "styled-components";

export const ContainerFlexHomePage = styled.div`
  display: flex;
`;

export const LogoH1homepage = styled.h1`
  position: absolute;
  margin-top: 22px;
  left: 2%;
  color: black;
  @media (max-width: 650) and (min-width: 650px) {
  }
`;

export const DivButtonsContainer = styled.div`
  position: absolute;
  right: 20%;
  top: 23px;
`;

export const ButtonhomePage1 = styled.button`
  border-radius: 38px;
  border: none;
  padding: 10px 15px 10px 15px;
  margin-left: 10px;
  transition: 0.3s;
  padding-left: 50px;
  padding-right: 50px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
`;

export const ButtonhomePage2 = styled.button`
  border-radius: 38px;
  border: none;
  padding: 10px 15px 10px 15px;
  margin-left: 10px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 850px) and (min-width: 650px) {
    margin-right: 50px;
  }
  @media (max-width: 650) and (min-width: 650px) {
    margin-right: 50px;
  }
`;

export const ButtonhomePage3 = styled.button`
  border-radius: 38px;
  border: none;
  padding: 10px 15px 10px 15px;
  margin-left: 10px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 850px) and (min-width: 650px) {
    position: absolute;
    top: 50px;
    left: 50px;
  }
  @media (max-width: 650) and (min-width: 650px) {
    position: absolute;
    top: 50px;
    left: 50px;
  }
`;

export const ButtonhomePage4 = styled.button`
  border-radius: 38px;
  border: none;
  padding: 10px 15px 10px 15px;
  margin-left: 10px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 850px) and (min-width: 650px) {
    position: absolute;
    top: 50px;
    right: 90px;
  }
  @media (max-width: 650px) and (min-width: 650px) {
    position: absolute;
    top: 50px;
    right: 90px;
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

export const DivContentHomepage = styled.div`
  position: absolute;
  top: 30vh;
  left: 7vh;

  h1 {
    margin-bottom: -10px;
    align-items: center;
    font-family: Shrikhand;
    font-size: 48px;
  }
`;

export const ButtomsearchHomepage = styled.button`
  border-radius: 38px;
  border: 1px solid grey;
  padding: 15px 10px 15px 10px;
  transition: 0.3s;
  margin-left: 80px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
`;

export const DivHandleInputContent = styled.div`
  display: flex;
  justify-content: center;
  top: 150px;
  margin-top: 60px;
  border-radius: 18px;
`;

export const ImgHero = styled.div`
  position: absolute;
  display: flex;
  width: 550px;
  z-index: -1;
  right: 50px;
  top: 150px;
`;

export const SpanSubmitHomepage1 = styled.span`
  display: inline-block;
  padding: 10px;
  background-color: #eaeaea;
  padding: 20px;
  input {
    background-color: #eaeaea;
    border: none;
  }
`;

export const SpanSubmitHomepage2 = styled.span`
  display: inline-block;
  padding: 20px;
  background-color: #eaeaea;
  input {
    background-color: #eaeaea;
    border: none;
  }
`;
