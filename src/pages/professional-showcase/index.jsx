import React, { useState } from "react";
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
} from "./style";
import { Estrela } from "../homepage/style";
import LisaimgSvg from "../homepage/photos/lisa.svg";
import FeedbacksProfissa from "../../components/feedbacks-profissa";
import Carousel from "../../components/swiperCarousel";
import ToHireProfessionalModal from "../../components/to-hire-professional-modal";

const ProfessionalShowcase = () => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <>
      {showModal && <ToHireProfessionalModal />}
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
            <ButtonToHireProfessional onClick={() => setShowModal(!showModal)}>
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
      </GeneralContainer>
      <Carousel />
      <FeedbacksProfissa />
    </>
  );
};

export default ProfessionalShowcase;
