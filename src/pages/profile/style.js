import styled from "styled-components";

export const Container = styled.div`
  background: gray;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-flow: column;
  @media (min-width: 768px) {
    flex-flow: row;
  }
`;

export const OptionsBox = styled.div`
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: white;
  border-radius: 5px 5px 0 0;

  button:first-child {
    border-radius: 5px 0 0 0 !important;
  }
  button:last-child {
    border-radius: 0 5px 0 0 !important;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonOption = styled.button`
  flex: 1;
  height: 100%;
  border-radius: 0;
  border: 0;
  font-size: 10px;
  background: #40476d;
  color: #feffc5;
  transition: 0.2s;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.75);

  &:hover {
    background: #3b4995;
    color: #fdff85;
    transform: scale(1.07);
  }
`;

export const WrapProfile = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    height: 34%;
  }
`;
export const WrapSideBar = styled.div`
  width: 100%;
  height: 64%;
`;

export const ProfileBox = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-flow: column;
  padding: 0 0 10px 0;
  @media (min-width: 768px) {
    height: 100%;
    padding: 0 20px;
  }
`;
export const BoxInfos = styled.div`
  flex: 5;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
export const Infos = styled.div`
  background: white;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  border-radius: 0 0 5px 5px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
  }
`;
export const CardInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
