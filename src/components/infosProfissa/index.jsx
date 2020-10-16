import React, { useState, useEffect } from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";
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

  const content = (
    <div>
      <p>Para contratar um profissa você precisa estar logado.</p>
      <p>Faça login ou cadastre-se.</p>
    </div>
  );

  return (
    <GeneralContainer>
      <ProfessionalPersonalInfos>
        <ContainerInfos>
          <Image src={infosProfissa.image ? infosProfissa.image : LisaimgSvg} />
          <Container>
            <ProfessionalName>{infosProfissa.name}</ProfessionalName>
            <Stars>
              <span>{getStars(feedbacksId(feedbacks, parseInt(id)))}</span>
              {Array.from(
                { length: getStars(feedbacksId(feedbacks, parseInt(id))) },
                (v, k) => k
              ).map((key) => {
                return <Estrela key={key} />;
              })}
              <span>
                <br />
                {feedbacksId(feedbacks, parseInt(id)).length + "Avaliações"}
              </span>
            </Stars>
          </Container>
        </ContainerInfos>
        <ContainerButton>
          {!token ? (
            <Popover content={content} title="Acesso negado">
              <ButtonToHireProfessional
                type="primary"
                onClick={() =>
                  token && setShowModalProfissa(!showModalProfissa)
                }
              >
                <p>Contratar </p>
                <p>Profissa</p>
              </ButtonToHireProfessional>
            </Popover>
          ) : (
            <ButtonToHireProfessional
              type="primary"
              onClick={() => token && setShowModalProfissa(!showModalProfissa)}
            >
              <p>Contratar </p>
              <p>Profissa</p>
            </ButtonToHireProfessional>
          )}
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
