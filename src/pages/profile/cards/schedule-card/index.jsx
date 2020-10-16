import React, { useState } from "react";
import { Card } from "lib-kenzie-academy";
import RicardoSvg from "../../../../pages/homepage/photos/ricardo.svg";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Form, Input, Button } from "antd"

import {
  InfoCard,
  ScheduleDate,
  Text,
  CardStyle,
  FeebackButton,

} from "../cardStyle"
import { Modal } from "lib-kenzie-academy";
import styled from "styled-components";

const ScheduleCard = ({ infos: { details, schedule, profissa }, creator }) => {

  const [modal, setModal] = useState(false)

  const onFinish = (e) => {

  }

  return (
    <div>
      <Card styles={CardStyle}>
        <InfoCard
        >
          <img src={RicardoSvg} />
          <h1>{creator && creator.name}</h1>
          <ScheduleDate><AiOutlineSchedule /><p>{schedule.split("-").reverse().join("/")}</p></ScheduleDate>
          <Text><p>{details}</p></Text>
          <FeebackButton onClick={() => setModal(true)}>Avaliar</FeebackButton>
        </InfoCard>
      </Card>
      <Modal isOpen={modal}>
        <h1>Avaliar Profissa</h1>
        <BoxModal>
          <StyledForm
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <StyledForm.Item
              name="email"
              placeholder="Dê uma nota para o Profissa"
              type="number"
            >
              <StyledInput />
            </StyledForm.Item>

            <StyledForm.Item
              name="password"
              placeholder="Deixe um comentario para o Profissa"
            >
              <StyledField />
            </StyledForm.Item>

            <BoxButton>
              <FeebackButton type="submit" >Avaliar</FeebackButton>
              <FeebackButton onClick={() => setModal(false)}>Retornar</FeebackButton>
            </BoxButton>
          </StyledForm>
        </BoxModal>
      </Modal>
    </div>
  );
};

export default ScheduleCard;

export const StyledInput = styled.input`
width: 100%;
height: 50px;
margin: 10px 0;
`
export const StyledField = styled.textarea`
width: 100%;
height: 150px;
margin: 10px 0;
`

export const BoxButton = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width: 50%;
`

export const BoxModal = styled.div`
width: 80vw;
height:50vh;
display: flex;
justify-content:center;
align-items:center;
flex-flow: column;

form{
display: flex;
justify-content:center;
align-items:center;
flex-flow: column;
width: 100%;
}

@media(min-width: 732px){
  width: 30vw;
height: 50vh;

}
`
export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;