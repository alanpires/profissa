import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import LisaimgSvg from "./photos/lisa.svg";
import FernandoimgSvg from "./photos/fernando.svg";
import RenataimgSvg from "./photos/renata.svg";
import LucianoSvg from "./photos/luciano.svg";
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
  SectionProfilesPhotos,
  Estrela,
  DivProfileCards,
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
              <select>
                <option selected>Serviços</option>
                <optgroup label="Assistência técnica:">
                  <option>Celulares</option>
                  <option>Computadores</option>
                  <option>Eletrodomésticos</option>
                </optgroup>
                <optgroup label="Aulas particulares: ">
                  <option>Idiomas</option>
                  <option>Artesanato</option>
                  <option>Reforço escolar</option>
                  <option>Gastronomia</option>
                  <option>Música</option>
                </optgroup>
                <optgroup label="Automóveis:">
                  <option>Funilaria</option>
                  <option>Mecânica</option>
                  <option>Guincho</option>
                  <option>Elétrica</option>
                  <option>Limpeza</option>
                </optgroup>
                <optgroup label="Reformas e Construções:">
                  <option>Pedreiro</option>
                  <option>Eletricista</option>
                  <option>Jardineiro</option>
                  <option>Engenheiro</option>
                  <option>Vidraceiro</option>
                  <option>Carpinteiro</option>
                  <option>Arquiteto</option>
                </optgroup>
                <optgroup label="Saúde e beleza:">
                  <option>Cuidador(a)</option>
                  <option>Dentista</option>
                  <option>Cabeleireiro</option>
                  <option>Enfermagem</option>
                  <option>Esteticista</option>
                  <option>Fisioterapeuta</option>
                  <option>Manicure</option>
                  <option>Médico(a)</option>
                  <option>Nutricionista</option>
                  <option>Pedicure</option>
                  <option>Personal Trainer</option>
                  <option>Psicólogo(a)</option>
                </optgroup>
                <optgroup label="Serviços domésticos:">
                  <option>Babá</option>
                  <option>Cozinheiro(a)</option>
                  <option>Diarista</option>
                  <option>Passadeira(o)</option>
                </optgroup>
              </select>
            </SpanSubmitHomepage1>
            <SpanSubmitHomepage2>
              <IoIosPin />
              <input placeholder="Localização" />
            </SpanSubmitHomepage2>
            <ButtomsearchHomepage>buscar</ButtomsearchHomepage>
          </form>
        </DivHandleInputContent>
      </DivContentHomepage>
      <ImgHero>
        <ImageHero />
      </ImgHero>
      <SectionProfilesPhotos>
        <h1>Profissas mais bem avaliados</h1>
        <div>
          <img src={LisaimgSvg} />
          <p>Lisa Sanchez</p>
          <span>
            5.0 <Estrela /> 12 avaliações
          </span>
        </div>
        <div>
          <img src={FernandoimgSvg} />
          <p>Fernando Ohara</p>
          <span>
            5.0 <Estrela /> 12 avaliações
          </span>
        </div>
        <div>
          <img src={RenataimgSvg} />
          <p>Renata Silva</p>
          <span>
            5.0 <Estrela /> 12 avaliações
          </span>
        </div>
        <div>
          <img src={LucianoSvg} />
          <p>Luciano Toguro</p>
          <span>
            5.0 <Estrela /> 12 avaliações
          </span>
        </div>
      </SectionProfilesPhotos>
      <DivProfileCards>
        <h1>Outros profissas</h1>
      </DivProfileCards>
    </ContainerFlexHomePage>
  );
};

export default Homepage;
