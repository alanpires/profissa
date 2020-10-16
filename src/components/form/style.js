import styled from "styled-components";
import { Input } from "antd";

export const NewInput = styled(Input)`
  height: 45px;
  width: 33vw;
  border-radius: 15px;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  padding-top: 50px;
  overflow-y: scroll;
  @media (max-width: 320px) {
    width: 110vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
  }
  @media (max-width: 375px) {
    width: 110vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding-left: 120px;
    padding-bottom: 50px;
  }
`;

export const CheckboxText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #4effd4;
`;
