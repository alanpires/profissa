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
  DivCard,
  InfoCard,
  EstrelaCards,
  IconSearch,
  IconLocal,
} from "./style";
import { useEffect, useState } from "react";

const Homepage = () => {
  const history = useHistory();
  const [usersHome, setUsersHome] = useState(null);
  const [input, setInput] = useState({ serv: "", cep: 0 })
  const [url, setUrl] = useState("https://profissa-server.herokuapp.com/users")
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUsersHome(res));
  }, [url]);
  const [showLogin, setShowLogin] = useState(false);

  const onClickSearch = (e) => {
    const { serv, cep } = input
    const servStr = serv !== "" ? `&service_like=${serv}` : ""
    const cepStr = cep ? `cep_gte=${cep - 50}&cep_lte=${cep + 50}` : ""
    setUrl("https://profissa-server.herokuapp.com/users?" + cepStr + servStr)
  };

  return (
    <ContainerFlexHomePage>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}
      <header>
        <LogoH1homepage>Profissa</LogoH1homepage>
        <DivButtonsContainer>
          <ButtonhomePage1 onClick={() => history.push("/signup-client")}>
            Cadastro
          </ButtonhomePage1>
          <ButtonhomePage2 onClick={() => setShowLogin(!showLogin)}>
            login
          </ButtonhomePage2>
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
          <SpanSubmitHomepage1>
            <IconSearch />
            <select onChange={(e) => setInput({ ...input, serv: e.target.value })}>
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
            <IconLocal />
            <input
              placeholder="CEP ex: 00000000"
              onChange={(e) => setInput({ ...input, cep: Number(e.target.value) })}
            />
          </SpanSubmitHomepage2>
          <ButtomsearchHomepage onClick={onClickSearch}>buscar</ButtomsearchHomepage>
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
          {usersHome ? (
            usersHome.map((user, index) => (
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
                  <h1>{user.service}</h1>
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
