import styled from "styled-components";
import { Modal } from "lib-kenzie-academy";

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-bottom: 35px;
`;

export const StyledDiv = styled.div`
  @media (min-width: 360px) {
    width: 100%;
  }
`;

export const StyleModal = styled(Modal)`
  width: 100%;
`;
