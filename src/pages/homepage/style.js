import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";

export const ContainerFlexHomePage = styled.div`
min-width: 360px;
  width: 100%;
  display: flex;
`;

export const LogoH1homepage = styled.h1`
  color: black;
  margin-left: 20px;
  @media (max-width: 650) and (min-width: 650px) {
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const DivUserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: 60px;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 31px;
  p {
    margin-top: 10px;
    margin-left: 20px;
  }
  img {
    margin-right: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
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
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    h1 {
      margin-bottom: -10px;
      align-items: center;
      font-family: Shrikhand;
      font-size: 35px;
    }
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  @media(max-width: 590px){
    visibility: hidden;
  }
`;

export const IconLocal = styled(IoIosPin)`
  width: 20px;
  height: 20px;
  @media(max-width: 590px){
    visibility: hidden;
  }
`;

export const ButtomsearchHomepage = styled.button`
  border-radius: 38px;
  border: 1px solid grey;
  transition: 0.3s;
  margin-left: 20px;
  font-size: 24px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
  @media(max-width: 590px){
    height: 70px;
  }
`;

export const DivHandleInputContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  border-radius: 18px;
  form {
    display: flex;
  }
  @media (max-width: 1260px) {
    margin: auto;
    margin-top: 100px;
  }
  @media(max-width: 561px){
    height: 50px;
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
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 100px 0px 0px 100px;
  border: 0.5px solid rgba(0, 0, 0, 0.16);

  select {    
      @media(max-width: 590px){
      width: 50px;
    }          
  }

  @media(max-width: 590px){
      height: 70px;
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
      font-size: 18px;
      color: black;
    }
    @media(max-width: 590px){
      width: 120px;
      margin-left: -20px;
    }
  }
  @media(max-width: 590px){
      height: 70px;
    }
`;

export const SectionProfilesPhotos = styled.section`
  width: 100%;
  display: flex;
  position: absolute;
  top: 100vh;

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
      font-weight: 700;
      font-family: Poppins;
      font-size: 24px;
    }

    span {
      display: flex;
      align-items: center;
      margin-top: -20px;
      font-size: 24px;
    }

    @media(max-width: 590px){
      flex-wrap: wrap;
      flex-shrink: 1;
      background-color: red;
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
  top: 115vh;
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
    margin-top: -15px;
    font-family: Shrikhand;
    font-size: 24px;
  }
  img {
    width: 30%;
  }
  h2 {
    display: flex;
    align-items: center;
  }
`;

export const StyledIconWork = styled(GrUserWorker)`
  margin-right: 5px;
`;
