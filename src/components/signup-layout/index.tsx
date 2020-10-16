import React from "react";
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  Title,
  WorkerImg,
  FormTitle,
  Subtitle,
} from "./style";
import MainImg from "../../assets/workerimg.jpg";
import FormUser from "../form";

interface Props {
  title: string | React.ReactNode;
}

const Layout = ({ title }: Props) => {
  return (
    <div>
      <MainDiv>
        <LeftDiv>
          <Title>{title}</Title>
          <WorkerImg src={MainImg} />
        </LeftDiv>
        <RightDiv>
          <FormUser />
        </RightDiv>
      </MainDiv>
    </div>
  );
};

export default Layout;
