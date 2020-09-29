import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const LinkA = styled(Link)`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(
    to right,
    var(--color-primary-lighter),
    var(--color-primary),
    var(--color-primary-dark)
  );
  text-transform: uppercase;
  font-family: "Poppins", sans-serif !important;
  background-size: 200%;
  transition: 0.5s;

  &:hover {
    background-image: linear-gradient(
      to right,
      var(--color-primary-lighter),
      var(--color-primary),
      var(--color-primary-dark)
    );
    color: var(--color-sixth-dark);
  }

  &:focus {
    background-image: linear-gradient(
      to right,
      var(--color-primary-light),
      var(--color-primary),
      var(--color-primary-dark)
    );
    color: var(--color-sixth-dark);
  }
`;
