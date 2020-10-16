import styled from "styled-components";
import { Input, Form } from "antd";

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
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  flex-direction: column;
  width: 40vh;
=======
  width: 40vw;
>>>>>>> master
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
  @media(max-width: 732px){

 .ant-form-item-label,.ant-form-item-control-input-content{
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .ant-input, .ant-input-lg{
   width: 100%;
 }
  }
`;

export const CheckboxText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #4effd4;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`

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

  .ant-form-item-label > label,.ant-checkbox-group > label{
    color:#FEFFC9 !important;
  }
`;