import React, { useEffect, useState } from "react";
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
  const servicesRequest = useSelector((state) => state.services.services);
  const dispatch = useDispatch();
  const feedbacks = useSelector(
    (state) => state.profissaFeedbacks.feedbacksRequest
  );
  const profissas = useSelector(
    (state) => state.profissaHomepage.profissasRequest
  );
  const [div1, setDiv1] = useState(false);
  const [div2, setDiv2] = useState(false);
  const [div3, setDiv3] = useState(false);

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
          <Sidebar setDiv1={setDiv1} setDiv2={setDiv2} setDiv3={setDiv3} />
        </LeftDiv>
        {div3 && <div>"ETC"</div>}
        {div2 && <div>"Avaliações"</div>}
        {div1 && (
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
        )}
      </MainDiv>
    </>
  );
};

export default ClientProfile;
