import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";
import { Card } from "lib-kenzie-academy";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { requestFeedbacks } from "../../redux/actions/feedbacks-request";
import { requestSchedules } from "../../redux/actions/schedules-actions";

const ProfessionalProfile = () => {
  const dispatch = useDispatch();
  const [user, feedbacks, schedules, state] = useSelector(state => [state.access.user, state.ProfissaFeedbacks.feedbacksRequest, state.schedules, state])
  const [infos, setInfos] = useState("Serviços Solicitados")
  const userType = user.select[0]

  useEffect(() => {
    if (feedbacks.length === 0 && schedules.length === 0) {
      dispatch(requestFeedbacks());
      dispatch(requestSchedules());
    }
    console.log(state)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbacks, schedules]);

  const choosedOption = () => {
    switch (infos) {
      case "Meus Serviços":
        return (
          <Infos>
            {schedules
              .filter(elem => elem.profissaId === user.id || elem.clientId === user.id)
              .map((elem, key) => (
                <Card key={key}>

                </Card>
              ))}
          </Infos>
        )
      case "Serviços Solicitados":
        return (
          <Infos>
            {schedules
              .filter(elem => elem.clientId === user.id || elem.clientId === user.id)
              .map((elem, key) => (
                <Card key={key}>

                </Card>
              ))}
          </Infos>
        )
      case "Avaliações feitas":
        return (
          <Infos>
            {feedbacks
              .filter(elem => elem.creatorId === user.id)
              .map((elem, key) => (
                <Card key={key}>
                </Card>
              ))}
          </Infos>
        )
      case "Avaliações recebidas":
        return (
          <Infos>
            {feedbacks.filter(elem => elem.receiverId === user.id).map((elem, key) => (
              <Card key={key}>
              </Card>
            ))}
          </Infos>
        )
      default:
        break;
    }
  }

  return (
    <Container>
      <ProfileBox>
        <AvatarCard />
        {userType === "Profissa" ?
          <Sidebar
            setInfos={setInfos}
            menuBars={["Meus Serviços", "Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]} /> :
          <Sidebar
            setInfos={setInfos}
            menuBars={["Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]} />}

      </ProfileBox>
      <BoxInfos>
        {choosedOption()}
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
`
const ProfileBox = styled.div`
background:blue;
flex:1;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-flow: column;
padding:10px;
`
const BoxInfos = styled.div`
background:black;
flex:5;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
`
const Infos = styled.div`
background:violet;
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-flow: wrap;
`
const CardInfos = styled.div`
background:whitesmoke;
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`