import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import FeedbackCard from "./cards/feedback-card";
import ScheduleCard from "./cards/schedule-card";
import { serviceRequest } from "../../redux/actions/service-request";
import { requestUsers } from "../../redux/actions/users";

import {
  Container,
  ProfileBox,
  WrapProfile,
  WrapSideBar,
  BoxInfos,
  Infos,
  OptionsBox,
  ButtonOption
} from "./style"
import styled from "styled-components";

const ProfessionalProfile = () => {
  const dispatch = useDispatch();
  const [user, users, feedbacks, services, state] = useSelector(state => [state.access.user, state.users, state.profissaFeedbacks.feedbacksRequest, state.services.services, state])
  const [infos, setInfos] = useState("Serviços Solicitados")
  const userType = user.select[0]


  useEffect(() => {
    dispatch(requestFeedbacks());
    dispatch(serviceRequest())
    dispatch(requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const choosedOption = () => {
    switch (infos) {
      case "Meus Serviços":
        return (
          services
            .filter(elem => elem.profissaId === user.id)
            .map((elem, key) => (
              <ScheduleCard key={key} infos={elem} creator={users.find(item => item.id === elem.clienteId)} />
            ))
        )
      case "Serviços Solicitados":
        return (
          services
            .filter(elem => elem.clienteId === user.id)
            .map((elem, key) => {
              return (
                <ScheduleCard key={key} infos={elem} creator={users.find(item => item.id === elem.profissaId)} />
              )
            })
        )
      case "Avaliações feitas":
        return (
          feedbacks
            .filter(elem => elem.creatorId === user.id)
            .map((elem, key) => (
              <FeedbackCard key={key}
                infos={elem}
                creator={users.find(item => item.id === elem.receiverId)} />
            ))
        )
      case "Avaliações recebidas":
        return (
          feedbacks.filter(elem => elem.receiverId === user.id).map((elem, key) => (
            <FeedbackCard key={key} infos={elem} creator={users.find(item => item.id === elem.creatorId)} />
          ))
        )
      default:
        break;
    }
  }

  const optionsForBar = () => {
    let options = ["Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]
    return userType === "Profissa" ? ["Meus Serviços", ...options] : options
  }
  console.log("AQUI ESTA O QUE VOCÊ PROCURA", optionsForBar())

  return (
    <Container>
      <ProfileBox>
        <WrapProfile>
          <AvatarCard />
        </WrapProfile>
        <WrapSideBar>
          <Sidebar
            setInfos={setInfos}
            menuBars={optionsForBar()} />
        </WrapSideBar>

      </ProfileBox>
      <BoxInfos>
        <OptionsBox>
          {optionsForBar().map((elem, key) =>
            <ButtonOption
              onClick={() => setInfos(elem)}
              key={key}>{elem}
            </ButtonOption>)}
        </OptionsBox>
        <Infos>

          {(feedbacks.length > 0 && services.length > 0) && choosedOption()}
        </Infos>
      </BoxInfos>
    </Container>
  );
};

export default ProfessionalProfile;

