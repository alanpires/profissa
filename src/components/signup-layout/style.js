import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;

  padding: 0;
  margin: 0;
`;

export const LeftDiv = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 725px) {
    width: 0vw;
    height: 0vh;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  background-color: #575757;
  width: 50vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 725px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const Title = styled.div`
  font-family: "Shrikhand", sans-serif;
  font-size: 48px;
  width: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1270px) {
    font-size: 36px;
  }
  @media (max-width: 954px) {
    font-size: 24px;
  }
  @media (max-width: 725px) {
    font-size: 0px;
  }
`;

export const WorkerImg = styled.img`
  width: 640px;
  height: 640px;
  @media (max-width: 1270px) {
    width: 480px;
    height: 480px;
  }
  @media (max-width: 954px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 725px) {
    width: 0px;
    height: 0px;
  }

  @media (max-width: 425px) {
    width: 0px;
    height: 0px;
  }
`;

export const FormTitle = styled.div`
  font-family: "Shrikhand", sans-serif;
  font-size: 48px;
  width: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1270px) {
    font-size: 36px;
  }
  @media (max-width: 954px) {
    font-size: 24px;
  }
  @media (max-width: 725px) {
    font-size: 0px;
  }
  padding-bottom: 100px;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  font-family: "Shrikhand", sans-serif;
  font-size: 30px;
  color: #4effd4;
`;
