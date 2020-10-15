import styled from "styled-components";

export const GeneralContainer = styled.div`
  margin: 0 25vh;
  height: 100%;
  @media (max-width: 425px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
`;

export const Header = styled.div`
  border: 1px solid black;
  height: 10vh;
  width: 100%;
`;

export const ProfessionalPersonalInfos = styled.div`
  height: 40vh;
  display: flex;
  justify-content: space-around;
  font-family: Shrikhand;

  @media (max-width: 425px) {
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  @media (max-width: 425px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonToHireProfessional = styled.button`
  height: 5rem;
  width: 10rem;
  border-radius: 25px;
  outline:none;
  border:none;
  background: #4EFFD4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column;
  p{
    margin:0;
    font-size:1rem;
  }
  @media (max-width: 425px) {
    width: 18rem;
    height: 3rem;
  }
  ${({ block }) => block && `
     pointer-events: none;
  `}
`;

export const ProfessionalPersonalSkills = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SidebarLeft = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: flex-start;
  }
`;

export const SidebarLeftOne = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 25px;
  background-color: #eaeaea;
  margin-bottom: 1.5rem;

  @media (max-width: 425px) {
    border-radius: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 20px;
  }

  p {
    font-size: 25px;
    font-family: Shrikhand;

    @media (max-width: 425px) {
      font-size: 25px;
    }
  }

  div {
    font-size: 20px;
    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;

export const SidebarLeftTwo = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 25px;
  background-color: #eaeaea;

  @media (max-width: 425px) {
    border-radius: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 25px;
    font-family: Shrikhand;

    @media (max-width: 425px) {
      font-size: 25px;
    }
  }

  div {
    font-size: 20px;

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;

export const SidebarRight = styled.div`
  width: 70vw;
  padding: 1rem;

  @media (max-width: 425px) {
    width: 100%;
    padding: 0;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextSidebarRight = styled.div`
  border-radius: 25px;
  padding: 1rem;
  background-color: #eaeaea;

  @media (max-width: 425px) {
    border-radius: 0px;
  }

  p {
    font-size: 25px;
    text-align: center;
    font-weight: 900;
    font-family: Shrikhand;

    @media (max-width: 425px) {
      font-size: 25px;
    }
  }

  div {
    font-size: 20px;
    text-align: center;

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;

export const Image = styled.img`
  @media (max-width: 425px) {
    text-align: center;
    height: 200px;
  }

  @media (max-width: 768px) {
    text-align: center;
    height: 200px;
  }
`;

export const ProfessionalName = styled.div`
  font-size: 3rem;

  @media (max-width: 425px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Stars = styled.div`
  font-size: 1.5rem;

  @media (max-width: 425px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  @media (max-width: 425px) {
    align-items: center;
  }
`;
