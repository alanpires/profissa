import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConfig } from "../login-modal/helper";
import { requestSchedules } from "../../redux/actions/schedules-actions";

import { Form, Input, Button, DatePicker, Select } from "antd";
import {
  Title,
  StyledModal,
  StyledForm,
  AdjustModal,
  StyledInput,
} from "./style";

const ToHireProfessionalModal = () => {
  const user = useSelector((state) => state.access.user);

  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);

  const onFinish = (values) => {
    console.log("Success:", values);
    const data = {
      userCreatorId: user.id,
      profissaId: "teste",
      typeService: values.typeService,
      details: values.details,
      date: values.date,
    };
    dispatch(requestSchedules(data, axiosConfig(token)));
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
          <StyledForm.Item
            label="Tipo de serviço"
            name="typeService"
            validateTrigger={false}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <select>
              <option value="Serviços">Serviços</option>
              <optgroup label="Assistência técnica:">
                <option>Celulares</option>
                <option>Computadores</option>
                <option>Eletrodomésticos</option>
              </optgroup>
              <optgroup label="Aulas particulares: ">
                <option>Idiomas</option>
                <option>Artesanato</option>
                <option>Reforço escolar</option>
                <option>Gastronomia</option>
                <option>Música</option>
              </optgroup>
              <optgroup label="Automóveis:">
                <option>Funilaria</option>
                <option>Mecânica</option>
                <option>Guincho</option>
                <option>Elétrica</option>
                <option>Limpeza</option>
              </optgroup>
              <optgroup label="Reformas e Construções:">
                <option>Pedreiro</option>
                <option>Eletricista</option>
                <option>Jardineiro</option>
                <option>Engenheiro</option>
                <option>Vidraceiro</option>
                <option>Carpinteiro</option>
                <option>Arquiteto</option>
              </optgroup>
              <optgroup label="Saúde e beleza:">
                <option>Cuidador(a)</option>
                <option>Dentista</option>
                <option>Cabeleireiro</option>
                <option>Enfermagem</option>
                <option>Esteticista</option>
                <option>Fisioterapeuta</option>
                <option>Manicure</option>
                <option>Médico(a)</option>
                <option>Nutricionista</option>
                <option>Pedicure</option>
                <option>Personal Trainer</option>
                <option>Psicólogo(a)</option>
              </optgroup>
              <optgroup label="Serviços domésticos:">
                <option>Babá</option>
                <option>Cozinheiro(a)</option>
                <option>Diarista</option>
                <option>Passadeira(o)</option>
              </optgroup>
            </select>
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
            <Button onClick={() => setShowModal(false)}>Return</Button>
          </StyledForm.Item>
        </StyledForm>
      </AdjustModal>
    </StyledModal>
  );
};

export default ToHireProfessionalModal;
