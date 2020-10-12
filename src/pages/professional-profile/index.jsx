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
  const [user, feedbacks, schedules, state] = useSelector(state => [state.access.user, state.profissaFeedbacks.feedbacksRequest, state.schedules, state])
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
        <WrapProfile>
          <AvatarCard />
        </WrapProfile>
        <WrapSideBar>
          {userType === "Profissa" ?
            <Sidebar
              setInfos={setInfos}
              menuBars={["Meus Serviços", "Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]} /> :
            <Sidebar
              setInfos={setInfos}
              menuBars={["Serviços Solicitados", "Avaliações feitas", "Avaliações recebidas"]} />}

        </WrapSideBar>

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