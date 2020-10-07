import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";


export const ContainerFlexHomePage = styled.div`
  display: flex;
  align-items:center;
  flex-flow:column;
  height: 100vh;
`;

export const LogoH1homepage = styled.h1`
margin:10px;
`;

export const DivButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
margin-right:20px;
`;

export const ButtonhomePage = styled.button`
  border-radius: 38px;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
  
`;

export const DivUserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 31px;
  p {
    margin-top: 10px;
    margin-left: 20px;
  }
  img {
    margin-right: 10px;
    height: 80%;
    width: calc(height);
    border-radius: 50%;
  }
`;


export const DivHandleInputContent = styled.div`
    width: 100%;
    height: 100px; 
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 140px 0 20px 0;

    &+h1{
        font-size:24px;
        font-weight:bold;
        align-self:flex-start;
        margin-left:21vw;
    }
`;

export const Header = styled.div`
  width: 100%;
  height: 50px; 
  display: flex;
  align-items:center;
  justify-content:space-between;
`;

export const ButtomsearchHomepage = styled.button`
  height: 100%;
  width:150px;
  border-radius: 38px;
  border: 1px solid gray;
  transition: 0.3s;
  margin-left: 40px;
  font-size: 1.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }
`;

export const ContainerInput = styled.span`
  width: 50%;
  height: 100%;
  background-color: #eaeaea;
  padding: 10px 20px;
  border-radius: 100px;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  display: flex;
  align-items:center;
  justify-content:space-evenly;

  div:first-child {
    padding-right:10px;
    border-right:2px solid rgba(0, 0, 0, 0.40);
  }
`;
export const BoxInput = styled.div`
flex:1;
height: 100%;
display: flex;
align-items:center;
 input,select {
    background-color: #eaeaea;
    border: none;
    color: black;
    height: 80%;
    width: 100%;
    font-size: 24px;
    border-radius: 10px;
    ::placeholder {
      font-size: 24px;
      color: black;
      text-justify:center;
    }
  }
  svg{
    width: 40px;
    height: 40px;
  }
  input:focus,select:focus{
outline: none !important;
background: rgba(0,0,0,0.1)
}
`

export const DivProfileCards = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-flow: wrap;
  width: 60%;

`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 400px;
`;

export const EstrelaCards = styled(BsStarFill)`
  color: #ffed47;
  width: 25px;
  height: 24px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  p {
    font-size: 12px;
  }
  h1 {
    margin-top: -5px;
    font-family: Shrikhand;
    font-size: 24px;
  }
`;
