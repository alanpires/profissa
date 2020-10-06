import styled from "styled-components";

export const DivPositionExample = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  background: rgba(196, 196, 196, 0.3);
  justify-content: center;
  padding: 10px;
  h1 {
    align-items: center;
    font-family: Shrikhand;
    font-size: 38px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 30%;

    h1 {
      align-items: center;
      font-family: Shrikhand;
      font-size: 28px;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 30%;

    h1 {
      align-items: center;
      font-family: Shrikhand;
      font-size: 25px;
    }
  }
`;
