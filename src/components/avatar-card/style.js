import styled from "styled-components";
import { Input } from "antd";

export const DivAvatarCard = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 16px;
  height: 318px;
  width: 351px;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.p`
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

export const InputDiv = styled.div`
display: flex
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ItemsDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const NewInput = styled(Input)`
  height: 35px;
  width: 400px;
  border-radius: 15px;
  margin-bottom: 20px;
`;
