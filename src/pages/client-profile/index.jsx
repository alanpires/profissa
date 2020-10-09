import React, { useEffect } from "react";
import { MainDiv, LeftDiv, RightDiv, ProfileTitle, DivCard } from "./style.js";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";
import RicardoSvg from "../homepage/photos/ricardo.svg";
import { Card } from "lib-kenzie-academy";
import { InfoCard, EstrelaCards } from "../homepage/style.js";
import { useSelector, useDispatch } from "react-redux";
import { serviceRequest } from "../../redux/actions/service-request";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import { servicesRequestClienteCurrent, axiosConfig } from "./helper";

const ClientProfile = () => {
  const token = useSelector((state) => state.access.token);
  const user = useSelector((state) => state.access.user);
  const servicesRequest = useSelector((state) => state.Services.services);
  const dispatch = useDispatch();
  const feedbacks = useSelector(
    (state) => state.ProfissaFeedbacks.feedbacksRequest
  );
  const profissas = useSelector(
    (state) => state.ProfissaHomepage.profissasRequest
  );

  useEffect(() => {
    dispatch(serviceRequest(axiosConfig(token)));
    dispatch(requestProfissasHomepage());
    dispatch(requestFeedbacks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainDiv>
        <LeftDiv>
          <AvatarCard />
          <Sidebar />
        </LeftDiv>
        <RightDiv>
          <ProfileTitle>Serviços solicitados</ProfileTitle>
          <DivCard>
            {profissas && feedbacks ? (
              servicesRequestClienteCurrent(
                servicesRequest,
                user,
                feedbacks,
                profissas
              ).map((user, index) => (
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
              ))
            ) : (
              <h1>Carregando</h1>
            )}
          </DivCard>
        </RightDiv>
      </MainDiv>
    </>
  );
};

export default ClientProfile;
