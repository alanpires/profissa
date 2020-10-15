import styled from "styled-components";

export const Header = styled.div`
  border: 1px solid black;
  height: 10vh;
  width: 100%;
`;

export const ProfissionaisProximos = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 31px;
    font-size: 48px;
    font-family: Shrikhand;
  }

  @media (max-width: 425px) {
    h4 {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const Infos = styled.div``;
