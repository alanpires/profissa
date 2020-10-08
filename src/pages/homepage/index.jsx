import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import LisaimgSvg from "./photos/lisa.svg";
import FernandoimgSvg from "./photos/fernando.svg";
import RenataimgSvg from "./photos/renata.svg";
import LucianoSvg from "./photos/luciano.svg";
import RicardoSvg from "./photos/ricardo.svg";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./styles.css";
import {
  ContainerFlexHomePage,
  StyledIconWork,
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
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [usersHome, setUsersHome] = useState(null);
  const [inputTest, setInputTest] = useState({ serv: "", cep: 0 });
  const [url, setUrl] = useState("https://profissa-server.herokuapp.com/users");
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => setUsersHome(res));
  // }, [url]);

  const users = useSelector((state) => state.ProfissaHomepage.profissasRequest);

  useEffect(() => {
    dispatch(requestProfissasHomepage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickSearch = (e) => {
    const { serv, cep } = inputTest;
    const servStr = serv !== "" ? `&service_like=${serv}` : "";
    const cepStr = cep ? `cep_gte=${cep - 50}&cep_lte=${cep + 50}` : "";
    setUrl("https://profissa-server.herokuapp.com/users?" + cepStr + servStr);
  };

  return (
    <>
      <Navbar />
      <ContainerFlexHomePage>
        <DivContentHomepage>
          <h1>Você tem um problema,</h1>
          <h1>Eles tem a solução</h1>
          <DivHandleInputContent>
            <form onSubmit={(e) => e.preventDefault}>
              <SpanSubmitHomepage1>
                <IconSearch />
                <select>
                  <option value="Serviços">Serviços</option>
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
              <Estrela /> 5.0
            </span>
            <h3>12 avaliações</h3>
          </div>
          <div>
            <img src={FernandoimgSvg} />
            <p>Fernando Ohara</p>
            <span>
              <Estrela /> 5.0
            </span>
            <h3>12 avaliações</h3>
          </div>
          <div>
            <img src={RenataimgSvg} />
            <p>Renata Silva</p>
            <span>
              <Estrela /> 5.0
            </span>
            <h3>12 avaliações</h3>
          </div>
          <div>
            <img src={LucianoSvg} />
            <p>Luciano Toguro</p>
            <span>
              <Estrela /> 5.0
            </span>
            <h3>12 avaliações</h3>
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
                    <h2>
                      {console.log(user)}
                      <StyledIconWork />
                      {user.service}
                    </h2>
                  </InfoCard>
                </Card>
              ))
            ) : (
              <h1>Carregando</h1>
            )}
          </DivCard>
        </DivProfileCards>
      </ContainerFlexHomePage>
    </>
  );
};

export default Homepage;
