import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

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
  top: 200px;
  left: 7vh;
  h1 {
    margin-bottom: -10px;
    align-items: center;
    font-family: Shrikhand;
    font-size: 48px;
  }
  @media (max-width: 1260px) {
    position: absolute;
    top: 200px;
    h1 {
      margin-bottom: -10px;
      align-items: center;
      font-family: Shrikhand;
      font-size: 15px;
    }
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
`;

export const IconLocal = styled(IoIosPin)`
  width: 20px;
  height: 20px;
`;

export const ButtomsearchHomepage = styled.button`
  border-radius: 38px;
  border: 1px solid grey;
  transition: 0.3s;
  margin-left: 50px;
  font-size: 24px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
`;

export const DivHandleInputContent = styled.div`
  justify-content: center;
  top: 150px;
  margin-top: 60px;
  border-radius: 18px;
  form {
    display: flex;
  }
`;

export const ImgHero = styled.div`
  position: absolute;
  display: flex;
  width: 550px;
  z-index: -1;
  right: 50px;
  top: 150px;
  @media (max-width: 1260px) {
    visibility: hidden;
  }
`;

export const SpanSubmitHomepage1 = styled.span`
  padding: 10px;
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 100px 0px 0px 100px;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  input {
    background-color: #eaeaea;
    border: none;
    color: black;
    ::placeholder {
      font-size: 24px;
      color: black;
    }
  }
`;

export const SpanSubmitHomepage2 = styled.span`
  padding: 20px;
  background-color: #eaeaea;
  border-radius: 0px 100px 100px 0px;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  input {
    background-color: #eaeaea;
    border: none;
    ::placeholder {
      font-size: 24px;
      color: black;
    }
  }
`;

export const SectionProfilesPhotos = styled.section`
  width: 100%;
  display: flex;
  position: absolute;
  top: 570px;
  h1 {
    position: absolute;
    left: 7vh;
    font-family: Shrikhand;
    font-size: 36px;
  }
  div {
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 40vh;
      height: 40vh;
      max-width: 250px;
      max-height: 250px;
    }
    p {
      font-family: Roboto;
      font-size: 24px;
    }
    span {
      display: flex;
      align-items: center;
      margin-top: -20px;
      font-size: 24px;
    }
  }
`;

export const Estrela = styled(BsStarFill)`
  color: #ffed47;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const DivProfileCards = styled.div`
  display: flex;
  background-color: #ffffff;
  position: absolute;
  top: 660px;
  width: 100%;
  z-index: -1;
  justify-content: center;
  h1 {
    margin-top: 310px;
    font-family: Shrikhand;
    font-size: 48px;
  }
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 400px;
`;

export const EstrelaCards = styled(BsStarFill)`
  color: #ffed47;
  width: 25px;
  height: 24px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
  p {
    font-size: 12px;
  }
  h1 {
    margin-top: -5px;
    font-family: Shrikhand;
    font-size: 24px;
  }
`;
