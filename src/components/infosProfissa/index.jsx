import React, { useState, useEffect } from "react";
import {
  GeneralContainer,
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
} from "./style";
import { useParams } from "react-router-dom";
import { Estrela } from "../../pages/homepage/style";
import LisaimgSvg from "../../pages/homepage/photos/lisa.svg";
import { useSelector } from "react-redux";
import { requestInfosProfissa } from "../../redux/actions/infos-profissa-actions";
import { useDispatch } from "react-redux";
import { feedbacksId } from "../../components/feedbacks-profissa/helper";
import { getStars } from "../../pages/professional-showcase/helper";

const InfosProfissa = ({ setShowModalProfissa, showModalProfissa }) => {
  // const [showModalProfissa, setShowModalProfissa] = useState(false);
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

  console.log(infosProfissa);

  return (
    <GeneralContainer>
      <ProfessionalPersonalInfos>
        <ContainerInfos>
          <Image src={LisaimgSvg} />
          <Container>
            <ProfessionalName>{infosProfissa.name}</ProfessionalName>
            <Stars>
              {getStars(feedbacksId(feedbacks, parseInt(id)))} <Estrela />
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
  );
};

export default InfosProfissa;
