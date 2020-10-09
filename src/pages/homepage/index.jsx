import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import { Card } from "lib-kenzie-academy";
import Navbar from "../../components/navbar/Navbar";
import BestRating from "../../components/best-rating";
import { useHistory } from "react-router-dom";
import RicardoSvg from "./photos/ricardo.svg";
import "./styles.css";
import {
  ContainerFlexHomePage,
  DivContentHomepage,
  ImgHero,
  ButtomsearchHomepage,
  DivHandleInputContent,
  SpanSubmitHomepage1,
  SpanSubmitHomepage2,
  SectionProfilesPhotos,
  DivProfileCards,
  DivCard,
  InfoCard,
  EstrelaCards,
  IconSearch,
  IconLocal,
} from "./style";
import { useEffect, useState } from "react";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import { useDispatch, useSelector } from "react-redux";
import { sortProfissas, loadBestRatingByProfession } from "./helper";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputTest, setInputTest] = useState({ serv: "", cep: 0 });
  const [url, setUrl] = useState("https://profissa-server.herokuapp.com/users");
  const users = useSelector((state) => state.ProfissaHomepage.profissasRequest);
  const feedbacks = useSelector(
    (state) => state.ProfissaFeedbacks.feedbacksRequest
  );

  useEffect(() => {
    dispatch(requestProfissasHomepage());
    dispatch(requestFeedbacks());
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
          {users && feedbacks ? (
            loadBestRatingByProfession(feedbacks, users).map(
              (profissa, key) => {
                return (
                  <div>
                  <BestRating
                    key={key}
                    name={profissa.name}
                    avaliations={profissa.avaliations}
                    stars={profissa.stars}
                  />
                  </div>
                );
              }
            )
          ) : (
            <h1>Carregando</h1>
          )}
        </SectionProfilesPhotos>
        <DivProfileCards>
          <h1>Outros profissas</h1>
          <DivCard>
            {users && feedbacks ? (
              sortProfissas(feedbacks, users).map((user, index) => (
                <div
                  onClick={() =>
                    history.push(`/professional-showcase/${user.id}`)
                  }
                >
                  <Card className="card" key={index}>
                    <InfoCard>
                      <img src={RicardoSvg} />
                      <div>
                        {Array.from({ length: user.stars }, (v, k) => k).map(
                          (key) => {
                            return <EstrelaCards key={key} />;
                          }
                        )}
                      </div>
                      <p>{user.avaliations} avaliações</p>
                      <h1>{user.name}</h1>
                      <h1>{user.service}</h1>
                    </InfoCard>
                  </Card>
                </div>
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
