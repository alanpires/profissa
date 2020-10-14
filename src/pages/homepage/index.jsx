import React from "react";
import { ReactComponent as ImageHero } from "./image-hero.svg";
import { Card } from "lib-kenzie-academy";
import Navbar from "../../components/navbar/Navbar";
import BestRating from "../../components/best-rating";
import { useHistory, Link } from "react-router-dom";
import RicardoSvg from "./photos/ricardo.svg";
import "./styles.css";
import { StyledIconWork } from './style'

import {
  ContainerFlexHomePage,
  DivContentHomepage,
  ImgHero,
  SectionProfilesPhotos,
  DivProfileCards,
  DivCard,
  InfoCard,
  EstrelaCards,
  ContentWraper,
} from "./style";

import { useEffect, useState } from "react";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import { useDispatch, useSelector } from "react-redux";
import { sortProfissas, loadBestRatingByProfession } from "./helper";
import InputHome from "../../components/InputHome";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [usersHome, setUsersHome] = useState([]);
  const [searchMode, setSearchMode] = useState(true);
  const profissas = useSelector(
    (state) => state.profissaHomepage.profissasRequest
  );
  const feedbacks = useSelector(
    (state) => state.profissaFeedbacks.feedbacksRequest
  );

  useEffect(() => {
    if (usersHome.length === 0) {
      dispatch(requestProfissasHomepage());
      dispatch(requestFeedbacks());
      setUsersHome(profissas);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profissas]);

  const onSubmit = (e, input) => {
    e.preventDefault();
    setSearchMode(false);
    setUsersHome(
      profissas.filter(
        (elem) =>
          ((elem.cep <= input.cep + 50 && elem.cep >= input.cep - 50) || input.cep === "")
          &&
          (elem.service === input.serv || input.serv === "Serviços" || input.serv === "")
      )
    );
    console.log(profissas, usersHome, input);
  };

  return (
    <>
      <Navbar />
      <ContainerFlexHomePage>
        <DivContentHomepage searchMode={!searchMode}>
          <ContentWraper searchMode={!searchMode}>
            {searchMode && (
              <>
                <h1>Você tem um problema,</h1>
                <h1>Eles tem a solução</h1>
              </>
            )}
            <InputHome onSubmit={onSubmit} searchMode={!searchMode} />
          </ContentWraper>
          {searchMode && (
            <ImgHero>
              <ImageHero />
            </ImgHero>
          )}
        </DivContentHomepage>

        {searchMode && (
          <>
            <SectionProfilesPhotos>
              <h1>Profissas mais bem avaliados</h1>
              {profissas && feedbacks ? (
                loadBestRatingByProfession(feedbacks, profissas).map(
                  (profissa, key) => {
                    return (
                      <div key={key}>
                        <BestRating
                          name={profissa.name}
                          avaliations={profissa.avaliations}
                          stars={profissa.stars}
                          service={profissa.service}
                        />
                      </div>
                    );
                  }
                )
              ) : (
                  <h1>Carregando</h1>
                )}
            </SectionProfilesPhotos>
          </>
        )}
        <DivProfileCards>
          {searchMode ? (
            <h1>Outros Profissas</h1>
          ) : (
              <h1>{usersHome.length} Profissas encontrado(s)</h1>
            )}
          <DivCard>
            {usersHome && feedbacks ? (
              sortProfissas(feedbacks, usersHome).map((user, key) => (
                <div
                  key={key}
                  onClick={() =>
                    history.push(
                      `/professional-showcase/${user.id}/${user.cep}`
                    )
                  }
                >
                  <Card className="card">
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
                      <h1>
                        <StyledIconWork />
                        {user.service}
                      </h1>
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
