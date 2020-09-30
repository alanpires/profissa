import React from "react";
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  Title,
  WorkerImg,
  FormTitle,
  Subtitle,
} from "./style.js";
import MainImg from "../../assets/workerimg.jpg";
import FormUser from "../form";
function Layout({ title, subtitle }) {
  return (
    <>
      <MainDiv>
        <LeftDiv>
          <Title>{title}</Title>
          <WorkerImg src={MainImg} />
        </LeftDiv>
        <RightDiv>
          <FormTitle>
            <Subtitle>{subtitle}</Subtitle>
          </FormTitle>
          <FormUser />
        </RightDiv>
      </MainDiv>
    </>
  );
}

export default Layout;
