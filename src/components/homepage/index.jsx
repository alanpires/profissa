import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import {
  ContainerFlexHomePage,
  LogoH1homepage,
  DivButtonsContainer,
  ButtonhomePage1,
  ButtonhomePage2,
  ButtonhomePage3,
  ButtonhomePage4,
  DivUserTop,
  ImgProfileHeaderTopHomepage,
  DivContentHomepage,
  ImgHero,
  ButtomsearchHomepage,
  DivHandleInputContent,
  SpanSubmitHomepage1,
  SpanSubmitHomepage2,
} from "./style";

const Homepage = () => {
  return (
    <ContainerFlexHomePage>
      <header>
        <LogoH1homepage>Profissa</LogoH1homepage>
        <DivButtonsContainer>
          <ButtonhomePage1>Seja um profissa</ButtonhomePage1>
          <ButtonhomePage2>login/cadastro</ButtonhomePage2>
          <ButtonhomePage3>informações</ButtonhomePage3>
          <ButtonhomePage4>ajuda</ButtonhomePage4>
        </DivButtonsContainer>
        <DivUserTop>
          <p>Alan</p>
          <ImgProfileHeaderTopHomepage src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/1820/de4f2bad614f383b90efa1b59a7f25f3/3/9bc32b4d42f417316732bfba8d42d6c1/545900.jpg" />
        </DivUserTop>
      </header>
      <DivContentHomepage>
        <h1>Você tem um problema,</h1>
        <h1>Eles tem a solução</h1>
        <DivHandleInputContent>
          <form>
            <SpanSubmitHomepage1>
              <AiOutlineSearch />
              <input placeholder="serviços" />
            </SpanSubmitHomepage1>
            <SpanSubmitHomepage2>
              <IoIosPin />
              <input placeholder="localidade" />
            </SpanSubmitHomepage2>
            <ButtomsearchHomepage>buscar</ButtomsearchHomepage>
          </form>
        </DivHandleInputContent>
      </DivContentHomepage>
      <ImgHero>
        <ImageHero />
      </ImgHero>
    </ContainerFlexHomePage>
  );
};

export default Homepage;
