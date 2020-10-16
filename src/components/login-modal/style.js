import styled from "styled-components";
import { Modal } from "lib-kenzie-academy";
import { Form, Input, Button } from "antd";

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-bottom: 35px;
  color:#FDFFAC;
`;

export const StyledDiv = styled.div`

  @media (min-width: 360px) {
    width: 100%;
  }
  .Modal {
    width: 80vw !important;
  }
`;

export const StyledModal = styled(Modal)``;

export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const AdjustModal = styled.div`
  width: 100vw;
  background:#40476D;
  border-radius:9px;
  @media (min-width: 732px) {
    width: 30vw;
    height: 30vw;
  }
`;
export const StyledInput = styled(Input)``;

export const StyledButton = styled(Button)`
margin:10px;
width: 100px;
height:40px;
`;

export const StyledFormItem = styled(StyledForm.Item)`
  width: 100%;
  
  .ant-form-item-control-input-content{
    display: flex;
  justify-content: space-evenly;
  align-items: center;
  }
  .ant-btn{
   font-family: "Poppins", sans-serif;
  }
  .ant-btn-primary{
     background: #0AFFC3;
     color:black;
  }
`;