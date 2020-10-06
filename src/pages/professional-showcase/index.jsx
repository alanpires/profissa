import React from "react";
import {
  GeneralContainer,
  Header,
  ProfessionalPersonalInfos,
  ProfessionalPersonalSkills,
  SidebarLeft,
  SidebarLeftOne,
  SidebarLeftTwo,
  SidebarRight,
} from "./style";

const ProfessionalShowcase = () => {
  return (
    <GeneralContainer>
      <Header></Header>
      <ProfessionalPersonalInfos></ProfessionalPersonalInfos>
      <ProfessionalPersonalSkills>
        <SidebarLeft>
          <SidebarLeftOne></SidebarLeftOne>
          <SidebarLeftTwo></SidebarLeftTwo>
        </SidebarLeft>
        <SidebarRight></SidebarRight>
      </ProfessionalPersonalSkills>
    </GeneralContainer>
  );
};

export default ProfessionalShowcase;
