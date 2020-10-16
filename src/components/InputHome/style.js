import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  display: flex;
  left: 20px;
  top: 470px;
  width: 100%;

  & + h1 {
    font-size: 24px;
    font-weight: bold;
    align-self: flex-start;
    margin-left: 21vw;
  }
`;

export const ButtomsearchHomepage = styled.button`
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

  @media (max-width: 760px) {
    position: absolute;
    top: 90px;
    left: 100px;
  }
`;

export const ContainerInput = styled.span`
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
    font-size: 18px;
    border-radius: 10px;
    ::placeholder {
      font-size: 18px;
      color: black;
      text-justify: center;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
  input:focus,
  select:focus {
    outline: none !important;
    background: rgba(0, 0, 0, 0.1);
  }
`;
