import React, { useEffect, useState } from "react";
import { Card } from "lib-kenzie-academy";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import RicardoSvg from "../../../../pages/homepage/photos/ricardo.svg";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Form, Input, Button, notification, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postFeedback } from "../../../../redux/actions/feedbacks-request";
import { requestFeedbacks } from "../../../../redux/actions/feedbacks-request";
import { serviceRequest } from "../../../../redux/actions/service-request";
import { requestUsers } from "../../../../redux/actions/users";

import {
  InfoCard,
  ScheduleDate,
  Text,
  CardStyle,
  FeebackButton,
  StyleImg,
} from "../cardStyle";
import { Modal } from "lib-kenzie-academy";
import styled from "styled-components";

const ScheduleCard = ({
  infos: { details, schedule, profissa, id },
  creator,
  feedbacks,
  user,
}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [pog, setPog] = useState(false);
  const token = useSelector((state) => state.access.token);
  const onFinish = (e) => {
    console.log(e);
    const axiosConfig = (token) => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const openNotificationSuccess = () => {
      notification.open({
        message: "Avaliação realizada com sucesso",
        description:
          "Muito obrigado, sua avaliação é muito importante para nós.",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    };

    const openNotificationFailed = () => {
      notification.open({
        message: "Erro inesperado",
        description: "Poxa vida, ocorreu um erro, tente novamente.",
        icon: <FrownOutlined style={{ color: "red" }} />,
      });
    };

    const data = {
      creatorId: user.id,
      creator: user,
      receiverId: creator.id,
      receiverType: "Profissa",
      feedback: e.desc,
      stars: e.nota,
      scheduleId: id,
    };
    console.log(token);
    dispatch(
      postFeedback(
        data,
        axiosConfig(token),
        openNotificationSuccess,
        openNotificationFailed,
        setModal
      )
    );
    dispatch(requestFeedbacks());
    dispatch(serviceRequest());
    dispatch(requestUsers());
    setPog(true);
  };

  useEffect(() => {
    dispatch(requestFeedbacks());
    dispatch(serviceRequest());
    dispatch(requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card styles={CardStyle}>
        <InfoCard>
          <StyleImg src={creator.image ? creator.image : RicardoSvg} />
          <h1>{creator && creator.name}</h1>
          <ScheduleDate>
            <AiOutlineSchedule />
            <p>{schedule.split("-").reverse().join("/")}</p>
          </ScheduleDate>
          <Text>
            <p>{details}</p>
          </Text>
          {pog || feedbacks ? (
            <FeebackButton>Avaliação já realizada</FeebackButton>
          ) : (
            <FeebackButton onClick={() => setModal(true)}>
              Avaliar
            </FeebackButton>
          )}
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
              name="nota"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                },
              ]}
            >
              <StyledInput
                type="number"
                placeholder="Dê uma nota para o Profissa"
              />
            </StyledForm.Item>

            <StyledForm.Item
              name="desc"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <StyledField placeholder="Deixe um comentario para o Profissa" />
            </StyledForm.Item>

            <BoxButton>
              <FeebackButton type="submit">Avaliar</FeebackButton>
              <FeebackButton onClick={() => setModal(false)}>
                Retornar
              </FeebackButton>
            </BoxButton>
          </StyledForm>
        </BoxModal>
      </Modal>
    </div>
  );
};

export default ScheduleCard;

export const StyledInput = styled(InputNumber)`
  width: 100%;
  height: 50px;
  margin: 10px 0;
`;
export const StyledField = styled(Input.TextArea)`
  width: 100%;
  height: 150px;
  margin: 10px 0;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

export const BoxModal = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
  }

  @media (min-width: 732px) {
    width: 30vw;
    height: 50vh;
  }
`;
export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
