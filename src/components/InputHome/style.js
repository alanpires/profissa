import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 140px 0 20px 0;

  & + h1 {
    font-size: 24px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 21vw;
  }
`;

export const ButtomsearchHomepage = styled.button`
  height: 100%;
  width: 150px;
  border-radius: 38px;
  border: 1px solid gray;
  transition: 0.3s;
  margin-left: 40px;
  font-size: 1.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.22);
    cursor: pointer;
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
  align-items: center;
  justify-content: space-evenly;

  div:first-child {
    padding-right: 10px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
  }
`;
export const BoxInput = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  input,
  select {
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
      text-justify: center;
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
  input:focus,
  select:focus {
    outline: none !important;
    background: rgba(0, 0, 0, 0.1);
  }
`;
