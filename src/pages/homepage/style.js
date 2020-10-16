import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";

export const ContainerFlexHomePage = styled.div`
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  ${({ searchMode }) => searchMode && `width:100%;`}
  h1 {
    align-items: center;
    font-family: Shrikhand;
    font-size: 48px;
  }
`;

export const ContentWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-left: 40px;
  ${({ searchMode }) => searchMode && `width:100%;`}

  h1 {
    position: absolute;
    left: 20px;
    width: 100%;
    top: 160px;
  }
`;

export const ImgHero = styled.div`
  display: flex;
  width: 550px;
  margin-top: 80px;
  margin-left: 550px;
  margin-top: -50px;
  @media (max-width: 1260px) {
    visibility: hidden;
    display: none;
  }
`;

export const SectionProfilesPhotos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  @media (max-width: 1260px) {
    margin-top: 500px;
  }

  @media (max-width: 768px) {
    margin-bottom: -15px;
    flex-direction: column;
    margin-top: 500px;

    h1 {
      margin-left: 20px;
      margin-top: 50px;
    }
  }

  h1 {
    margin-top: 40px;
    margin-left: 20px;
    position: absolute;
    font-family: Shrikhand;
    font-size: 36px;
  }

  section {
    display: block;
    flex-direction: row;
    margin-top: 75px;
  }

  div {
    margin-top: 100px;
    margin-bottom: -75px;
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
  margin-top: 180px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #ffffff;
  width: 100%;
  h1 {
    font-family: Shrikhand;
    font-size: 48px;
    margin-top: 50px;
  }
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  h2 {
    display: flex;
    align-items: center;
  }
`;

export const StyledIconWork = styled(GrUserWorker)`
  margin-right: 5px;
`;

export const StyleImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 5px;
`;
