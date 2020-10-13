import React, { useState, useEffect } from "react";
import { Card } from "lib-kenzie-academy";
import {
  GeneralContainer,
  Header,
  ProfessionalPersonalInfos,
  ProfessionalPersonalSkills,
  SidebarLeft,
  SidebarLeftOne,
  SidebarLeftTwo,
  SidebarRight,
  Image,
  ProfessionalName,
  Stars,
  ButtonToHireProfessional,
  Container,
  ContainerButton,
  ContainerInfos,
  TextSidebarRight,
  ProfissionaisProximos,
} from "./style";
import { useParams } from "react-router-dom";
import { InfoCard, DivCard } from "../homepage/style";
import RicardoSvg from "../homepage/photos/ricardo.svg";
import { Estrela } from "../homepage/style";
import LisaimgSvg from "../homepage/photos/lisa.svg";
import FeedbacksProfissa from "../../components/feedbacks-profissa";
import Carousel from "../../components/swiperCarousel";
import ToHireProfessionalModal from "../../components/to-hire-professional-modal";
import { useSelector } from "react-redux";
import { requestInfosProfissa } from "../../redux/actions/infos-profissa-actions";
import { useDispatch } from "react-redux";
import { feedbacksId } from "../../components/feedbacks-profissa/helper";
import { getStars } from "./helper";

const ProfessionalShowcase = () => {
  const [showModalProfissa, setShowModalProfissa] = useState(false);
  const users = useSelector((state) => state.profissaHomepage.profissasRequest);
  const { id } = useParams();
  const token = useSelector((state) => state.access.token);
  const dispatch = useDispatch();
  const infosProfissa = useSelector((state) => state.infosProfissa);
  const feedbacks = useSelector(
    (state) => state.profissaFeedbacks.feedbacksRequest
  );

  const axiosConfig = (token) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    dispatch(requestInfosProfissa(id, axiosConfig(token)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(feedbacksId(feedbacks, parseInt(id)));
  // console.log(infosProfissa);
  console.log();

  // console.log(teste());

  return (
    <>
      {showModalProfissa && (
        <ToHireProfessionalModal setShowModalProfissa={setShowModalProfissa} />
      )}
      <Header>Header Fixo</Header>
      <GeneralContainer>
        <ProfessionalPersonalInfos>
          <ContainerInfos>
            <Image src={LisaimgSvg} />
            <Container>
              <ProfessionalName>{infosProfissa.name}</ProfessionalName>
              <Stars>
                {Array.from(
                  { length: getStars(feedbacksId(feedbacks, parseInt(id))) },
                  (v, k) => k
                ).map((key) => {
                  return <Estrela key={key} />;
                })}
                {feedbacksId(feedbacks, parseInt(id)).length + " "}
                Avaliações
              </Stars>
            </Container>
          </ContainerInfos>
          <ContainerButton>
            <ButtonToHireProfessional
              onClick={() => setShowModalProfissa(!showModalProfissa)}
            >
              Contratar profissional
            </ButtonToHireProfessional>
          </ContainerButton>
        </ProfessionalPersonalInfos>
        <ProfessionalPersonalSkills>
          <SidebarLeft>
            <SidebarLeftOne>
              <p>Habilidades Profissionais:</p>
              <div>{infosProfissa.hardSkills}</div>
            </SidebarLeftOne>
            <SidebarLeftTwo>
              <p>Habilidades Interpessoais</p>
              <div>{infosProfissa.softSkills}</div>
            </SidebarLeftTwo>
          </SidebarLeft>
          <SidebarRight>
            <TextSidebarRight>
              <p>Sobre o profissional</p>
              <div>{infosProfissa.about}</div>
            </TextSidebarRight>
          </SidebarRight>
        </ProfessionalPersonalSkills>
      </GeneralContainer>
      <Carousel />
      <FeedbacksProfissa />
      <ProfissionaisProximos>
        <h4>Outros profissionais da área</h4>
      </ProfissionaisProximos>

      <DivCard>
        {users.map((user, index) => (
          <div key={index}>
            <Card className="card" key={index}>
              <InfoCard>
                <img src={RicardoSvg} />
                <div>
                  {Array.from({ length: user.stars }, (v, k) => k).map(
                    (key) => {
                      return <Estrela key={key} />;
                    }
                  )}
                </div>
                <p>{user.avaliations} avaliações</p>
                <h1>{user.name}</h1>
                <h1>{user.service}</h1>
              </InfoCard>
            </Card>
          </div>
        ))}
      </DivCard>
    </>
  );
};

export default ProfessionalShowcase;
