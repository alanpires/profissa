import styled from "styled-components";
import { Input } from "antd";

export const NewInput = styled(Input)`
  height: 45px;
  width: 33vw;
  border-radius: 15px;
  margin-bottom: 20px;
<<<<<<< HEAD
=======
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
>>>>>>> 8ee9b320e08230d3b4390ee19b702ad19a6de025
`;

export const FormDiv = styled.div`
  display: flex;
<<<<<<< HEAD
  justify-content: center;
  align-items: center;
  width: 800px;
=======
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vh;
  padding-top: 50px;
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
>>>>>>> 8ee9b320e08230d3b4390ee19b702ad19a6de025
`;

export const CheckboxText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #4effd4;
`;
