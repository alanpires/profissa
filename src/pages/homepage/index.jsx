import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import LisaimgSvg from "./photos/lisa.svg";
import FernandoimgSvg from "./photos/fernando.svg";
import RenataimgSvg from "./photos/renata.svg";
import LucianoSvg from "./photos/luciano.svg";
import RicardoSvg from "./photos/ricardo.svg";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import LoginModal from "../../components/login-modal";
import "./styles.css";
import {
  ContainerFlexHomePage,
  LogoH1homepage,
  DivButtonsContainer,
  ButtonhomePage,
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
  DivCard,
  InfoCard,
  EstrelaCards,
  IconSearch,
  IconLocal,
} from "./style";
import { useEffect, useState } from "react";

const getUsersUrl = "https://profissa-server.herokuapp.com/users";

const Homepage = () => {
  const history = useHistory();
  const [users, getUsersHomepage] = useState(null);
  useEffect(() => {
    fetch(getUsersUrl)
      .then((res) => res.json())
      .then((res) => getUsersHomepage(res));
  }, []);

  const [showLogin, setShowLogin] = useState(false);

  const preventDefaultForm = (e) => {
    e.preventDefault();
  };

  return (
    <ContainerFlexHomePage>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}

      <header>
        <LogoH1homepage>Profissa</LogoH1homepage>
        <DivButtonsContainer>
          <ButtonhomePage>Seja um Profissa</ButtonhomePage>
          <ButtonhomePage onClick={() => history.push("/signup-client")}>
            Cadastro
          </ButtonhomePage>
          <ButtonhomePage onClick={() => setShowLogin(!showLogin)}>
            login
          </ButtonhomePage>
          <ButtonhomePage>informações</ButtonhomePage>
          <ButtonhomePage>ajuda</ButtonhomePage>
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
          <form onSubmit={(e) => preventDefaultForm(e)}>
            <SpanSubmitHomepage1>
              <IconSearch />
              <input placeholder="serviços" />
            </SpanSubmitHomepage1>
            <SpanSubmitHomepage2>
              <IconLocal />
              <input
                required
                pattern="\d{5}\d{3}"
                placeholder="CEP ex: 00000000"
              />
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
        <DivCard>
          {users ? (
            users.map((user, index) => (
              <Card className="card" key={index}>
                <InfoCard>
                  <img src={RicardoSvg} />
                  <div>
                    <EstrelaCards />
                    <EstrelaCards />
                    <EstrelaCards />
                    <EstrelaCards />
                    <EstrelaCards />
                  </div>
                  <p>12 avaliações</p>
                  <h1>{user.name}</h1>
                </InfoCard>
              </Card>
            ))
          ) : (
            <h1>Carregando</h1>
          )}
        </DivCard>
      </DivProfileCards>
    </ContainerFlexHomePage>
  );
};

export default Homepage;
