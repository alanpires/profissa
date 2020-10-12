import React, { useState } from "react";
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
import { InfoCard, DivCard } from "../homepage/style";
import RicardoSvg from "../homepage/photos/ricardo.svg";
import { Estrela } from "../homepage/style";
import LisaimgSvg from "../homepage/photos/lisa.svg";
import FeedbacksProfissa from "../../components/feedbacks-profissa";
import Carousel from "../../components/swiperCarousel";
import ToHireProfessionalModal from "../../components/to-hire-professional-modal";
import { useSelector } from "react-redux";

const ProfessionalShowcase = () => {
  const [showModalProfissa, setShowModalProfissa] = useState(false);
  const users = useSelector((state) => state.profissaHomepage.profissasRequest);

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
              <ProfessionalName>Lisa Sanchez</ProfessionalName>
              <Stars>
                5.0 <Estrela /> 12 avaliações
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
              <p>Habilidades:</p>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
            </SidebarLeftOne>
            <SidebarLeftTwo>
              <p>Outro texto</p>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
              <div>Lorem Ipsum</div>
            </SidebarLeftTwo>
          </SidebarLeft>
          <SidebarRight>
            <TextSidebarRight>
              <p>Sobre o profissional</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel quam sed augue finibus malesuada vitae at quam. Morbi at
                tellus molestie, condimentum massa vitae, condimentum nisi.
                Morbi ullamcorper, quam a vestibulum vulputate, augue felis
                fringilla quam, eu scelerisque lectus ipsum at sem.
              </div>
              <div>
                Aliquam egestas nisl eu magna dignissim facilisis. Vivamus
                pulvinar risus tellus, nec congue ex convallis vitae. Mauris
                imperdiet aliquam sagittis. Sed molestie ornare nulla, ut
                hendrerit orci ullamcorper in. Mauris iaculis fermentum posuere.
                Quisque vestibulum lacus sit amet est imperdiet eleifend.
                Suspendisse pulvinar finibus eleifend. Vestibulum et suscipit
                metus. Suspendisse et velit tempor, semper nisl ac, tempor nunc.
                In eleifend semper diam in vehicula.
              </div>
            </TextSidebarRight>
          </SidebarRight>
        </ProfessionalPersonalSkills>
        <FeedbacksProfissa />
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
