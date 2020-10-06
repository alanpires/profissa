import React from "react";
import { MainDiv, LeftDiv } from "./style.js";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";

const ClientProfile = () => {
  return (
    <>
      <MainDiv>
        <LeftDiv>
          <AvatarCard />
          <Sidebar />
        </LeftDiv>
      </MainDiv>
    </>
  );
};

export default ClientProfile;
