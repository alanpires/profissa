import React from "react";
import {
  ContainerFlexHomePage,
  HeaderhomePage,
  LogoH1homepage,
  DivButtonsContainer,
  ButtonhomePage,
  DivUserTop,
  ImgProfileHeaderTopHomepage,
} from "./style";

const Homepage = () => {
  return (
    <ContainerFlexHomePage>
      <HeaderhomePage>
        <LogoH1homepage>Profissa</LogoH1homepage>
        <DivButtonsContainer>
          <ButtonhomePage id="botton-sejaum-profissa">
            Seja um profissa
          </ButtonhomePage>
          <ButtonhomePage>login/cadastro</ButtonhomePage>
          <ButtonhomePage>informações</ButtonhomePage>
          <ButtonhomePage>ajuda</ButtonhomePage>
        </DivButtonsContainer>
        <DivUserTop>
          <p>Alan</p>
          <ImgProfileHeaderTopHomepage src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/1820/de4f2bad614f383b90efa1b59a7f25f3/3/9bc32b4d42f417316732bfba8d42d6c1/545900.jpg" />
        </DivUserTop>
      </HeaderhomePage>
    </ContainerFlexHomePage>
  );
};

export default Homepage;
