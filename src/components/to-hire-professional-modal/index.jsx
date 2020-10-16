import React, { useState, useEffect } from "react";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { axiosConfig } from "../login-modal/helper";
import { requestSchedules } from "../../redux/actions/schedules-actions";
import { useParams } from "react-router-dom";

import { Form, Input, Button, DatePicker, Select } from "antd";
import {
  Title,
  StyledModal,
  StyledForm,
  AdjustModal,
  StyledInput,
} from "./style";

const ToHireProfessionalModal = ({ setShowModalProfissa }) => {
  const user = useSelector((state) => state.access.user);
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);
  const params = useParams();
  const [profissa, setProfissa] = useState([]);

  const axiosConfig = (token) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const openNotificationSuccess = () => {
    notification.open({
      message: "Profissa contratado com sucesso",
      description: "Parabéns, o profissa logo entrará em contato com você.",
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

  useEffect(() => {
    axios
      .get(`https://profissa-server.herokuapp.com/users/${params.id}`)
      .then((res) => {
        setProfissa(res.data);
        console.log(res.data);
      });
  }, [params.id]);

  const onFinish = (values) => {
    console.log("Success:", values);
    const data = {
      clienteId: user.id,
      profissaId: params.id,
      profissa: profissa,
      details: values.details,
      schedule: values.date,
    };
    console.log(data);
    dispatch(
      requestSchedules(
        data,
        axiosConfig(token),
        openNotificationSuccess,
        openNotificationFailed,
        setShowModal
      )
    );
  };

  return (
    <StyledModal class="Modal" isOpen={showModal}>
      <AdjustModal>
        <StyledForm
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Title>Precisamos de mais informações</Title>
          <StyledForm.Item label="Tipo de serviço" validateTrigger={false}>
            {profissa && profissa.service}
          </StyledForm.Item>

          <StyledForm.Item
            label="Data"
            name="date"
            validateTrigger={false}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <input type="date" />
          </StyledForm.Item>

          <StyledForm.Item
            label="Detalhes"
            name="details"
            validateTrigger={false}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledInput.TextArea />
          </StyledForm.Item>

          <StyledForm.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={() => setShowModalProfissa(false)}>Return</Button>
          </StyledForm.Item>
        </StyledForm>
      </AdjustModal>
    </StyledModal>
  );
};

export default ToHireProfessionalModal;
