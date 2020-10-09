import React from "react";
import UserDefault from "./photos/userDefault.jpg";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import LoginModal from "../../components/login-modal";
import {
  ContainerFlexHomePage,
  LogoH1homepage,
  DivButtonsContainer,
  ButtonhomePage,
  DivUserTop,
  ButtomsearchHomepage,
  DivHandleInputContent,
  ContainerInput,
  DivProfileCards,
  InfoCard,
  EstrelaCards,
  IconSearch,
  IconLocal,
  Header,
  BoxInput
} from "./style";
import RicardoSvg from './photos/ricardo.svg'
import { useEffect, useState } from "react";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

const HomeSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputTest, setInputTest] = useState({ serv: "", cep: 0 });
  const [url, setUrl] = useState("https://profissa-server.herokuapp.com/users");

  const users = useSelector((state) => state.ProfissaHomepage.profissasRequest);
  const storeHome = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProfissasHomepage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showLogin, setShowLogin] = useState(false);

  const onClickSearch = (e) => {
    const { serv, cep } = inputTest;
    const servStr = serv !== "" ? `&service_like=${serv}` : "";
    const cepStr = cep ? `cep_gte=${cep - 50}&cep_lte=${cep + 50}` : "";
    setUrl("https://profissa-server.herokuapp.com/users?" + cepStr + servStr);
  };

  const userLoged = storeHome.access.user.name;
  console.log("aqui");
  console.log(userLoged);

  return (
    <ContainerFlexHomePage>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}
      <Header>
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
          {userLoged ? (
            <DivUserTop>
              <p>{userLoged}</p>
              <img src={UserDefault} />
            </DivUserTop>
          ) : null}
        </DivButtonsContainer>
      </Header>
      <DivHandleInputContent>
        <ContainerInput>
          <BoxInput>
            <AiOutlineSearch />
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
          </BoxInput>
          <BoxInput>

            <IoIosPin />
            <input
              required
              pattern="\d{5}\d{3}"
              placeholder="CEP ex: 00000000"
            />
          </BoxInput>
        </ContainerInput>
        <ButtomsearchHomepage>buscar</ButtomsearchHomepage>
      </DivHandleInputContent>
      <h1>230 Profissas encontrados</h1>
      <DivProfileCards>
        {users ? (
          users.map((user, index) => (
            <Card key={index}>
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
      </DivProfileCards>
    </ContainerFlexHomePage>
  );
};

export default HomeSearch;
