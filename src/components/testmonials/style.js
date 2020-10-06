import styled from "styled-components";

export const DivTestmonials = styled.div`
  display: flex;
  width: 45vw;
  padding: 15px;

  span {
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding-left: 20px;
    padding-top: 30px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 30%;
  }
`;

export const DivInfoClient = styled.div`
  width: 100px;
  height: 100px;
  p {
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding-left: 20px;
  }
`;

export const DivImag = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;
