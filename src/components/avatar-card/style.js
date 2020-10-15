import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
 height: 100%;
  width: 100%;
`

export const DivAvatarCard = styled.div`
  background-color: #ffff;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding:20px;
  border-radius:5px;
`;

export const Username = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

export const InputDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const ItemsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
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
