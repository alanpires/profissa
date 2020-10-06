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
  Image,
  ProfessionalName,
  Stars,
  ButtonToHireProfessional,
} from "./style";
import { Estrela } from "../homepage/style";
import LisaimgSvg from "../homepage/photos/lisa.svg";

const ProfessionalShowcase = () => {
  return (
    <>
      <Header></Header>
      <GeneralContainer>
        <ProfessionalPersonalInfos>
          <Image>
            <img src={LisaimgSvg} />
          </Image>
          <ProfessionalName>
            <p>Lisa Sanchez</p>
          </ProfessionalName>
          <Stars>
            <span>
              5.0 <Estrela /> 12 avaliações
            </span>
          </Stars>
          <ButtonToHireProfessional>
            <button></button>
          </ButtonToHireProfessional>
        </ProfessionalPersonalInfos>
        <ProfessionalPersonalSkills>
          <SidebarLeft>
            <SidebarLeftOne></SidebarLeftOne>
            <SidebarLeftTwo></SidebarLeftTwo>
          </SidebarLeft>
          <SidebarRight></SidebarRight>
        </ProfessionalPersonalSkills>
      </GeneralContainer>
    </>
  );
};

export default ProfessionalShowcase;
