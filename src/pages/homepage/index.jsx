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
  SectionProfilesPhotos,
  DivProfileCards,
  DivCard,
  InfoCard,
  EstrelaCards,
  ContentWraper
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
  const [usersHome, setUsersHome] = useState([])
  const [searchMode, setSearchMode] = useState(true)
  const users = useSelector((state) => state.ProfissaHomepage.profissasRequest);
  const feedbacks = useSelector(
    (state) => state.ProfissaFeedbacks.feedbacksRequest
  );

  useEffect(() => {
    if (usersHome.length === 0) {
      dispatch(requestProfissasHomepage());
      dispatch(requestFeedbacks());
      setUsersHome(users)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const onSubmit = (e, input) => {
    e.preventDefault()
    setSearchMode(false)
    setUsersHome(
      users.filter(
        elem => ((elem.cep <= input.cep + 50 && elem.cep >= input.cep - 50) || elem.cep === 0) || (elem.service === input.serv || input.serv === "Serviços")
        //  
      ))
    console.log(users, usersHome, input)
  };

  return (
    <>
      <Navbar />
      <ContainerFlexHomePage>
        <DivContentHomepage searchMode={!searchMode}>
          <ContentWraper searchMode={!searchMode}>

            {searchMode &&
              <>
                <h1>Você tem um problema,</h1>
                <h1>Eles tem a solução</h1>
              </>
            }
            <InputHome onSubmit={onSubmit} />
          </ContentWraper>
          {searchMode &&
            <ImgHero>
              <ImageHero />
            </ImgHero>
          }
        </DivContentHomepage>

        {searchMode && (
          <>
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
          </>)}
        <DivProfileCards>
          {searchMode ? (
            <h1>Outros Profissas</h1>
          ) : (
              <h1>{usersHome.length} Profissas encontrado(s)</h1>

            )}
          <DivCard>
            {usersHome && feedbacks ? (
              sortProfissas(feedbacks, usersHome).map((user, index) => (
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
