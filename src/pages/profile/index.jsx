import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import FeedbackCard from "./feedback-card";
import ScheduleCard from "./schedule-card";
import { serviceRequest } from "../../redux/actions/service-request";

const ProfessionalProfile = () => {
  const dispatch = useDispatch();
  const [user, feedbacks, services, state] = useSelector(state => [state.access.user, state.profissaFeedbacks.feedbacksRequest, state.services.services, state])
  const [infos, setInfos] = useState("Serviços Solicitados")
  const userType = user.select[0]


  useEffect(() => {
    if (feedbacks.length === 0 && services.length === 0) {
      dispatch(requestFeedbacks());
      dispatch(serviceRequest());
    }
    console.log(state)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbacks, services]);

  const choosedOption = () => {
    switch (infos) {
      case "Meus Serviços":
        return (
          services
            .filter(elem => elem.profissaId === user.id)
            .map((elem, key) => (
              <ScheduleCard key={key} infos={elem} />
            ))
        )
      case "Serviços Solicitados":
        return (
          services
            .filter(elem => elem.clientId === user.id)
            .map((elem, key) => (
              <ScheduleCard key={key} infos={elem} />
            ))
        )
      case "Avaliações feitas":
        return (
          feedbacks
            .filter(elem => elem.creatorId === user.id)
            .map((elem, key) => (
              <FeedbackCard key={key}
                infos={elem}
                creator={(feedbacks.find(item => item.creatorId === elem.receiverId)).creator} />
            ))
        )
      case "Avaliações recebidas":
        return (
          feedbacks.filter(elem => elem.receiverId === user.id).map((elem, key) => (
            <FeedbackCard key={key} infos={elem} creator={elem.creator} />
          ))
        )
      default:
        break;
    }
  }

  return (
    <Container>
      <ProfileBox>
        <WrapProfile>
          <AvatarCard />
        </WrapProfile>
        <WrapSideBar>
          <Sidebar
            setInfos={setInfos}
            menuBars={userType === "Profissa" ?
              ["Meus Serviços", "Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"] :
              ["Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]} />
        </WrapSideBar>

      </ProfileBox>
      <BoxInfos>
        <Infos>
          {(feedbacks.length > 0 && services.length > 0) && choosedOption()}
        </Infos>
      </BoxInfos>
    </Container>
  );
};

export default ProfessionalProfile;

const Container = styled.div`
background:gray;
box-sizing:border-box;
width: 100vw;
height: 100vh;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
`
const WrapProfile = styled.div`
width: 100%;
height: 34%;
`
const WrapSideBar = styled.div`
width: 100%;
height: 62%;
`

const ProfileBox = styled.div`
flex:1;
height: 100%;
display:flex;
justify-content:space-between;
align-items: space-between; 
flex-flow: column;
padding: 0 20px;
`
const BoxInfos = styled.div`
flex:5;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`
const Infos = styled.div`
background:white;

width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-flow: wrap;
`
const CardInfos = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`