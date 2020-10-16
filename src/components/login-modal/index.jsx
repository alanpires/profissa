import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { axiosConfig } from "./helper";
import {
  requestLogin,
  requestUserDecoder,
} from "../../redux/actions/access-actions";

import {
  Title,
  StyledModal,
  StyledForm,
  AdjustModal,
  StyledButton,
  StyledFormItem
} from "./style";
import StylezedInput from "../inputLogin/Input.jsx";

const LoginModal = ({ setShowLogin }) => {
  const user = useSelector((state) => state.access.user);

  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const errorRequest = useSelector((state) => state.messagesLogin.errorRequest);
  const token = useSelector((state) => state.access.token);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(requestLogin(values));
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
          <Title>Conecte-se</Title>

          <StylezedInput
            label="E-mail"
            name="email"
            validateTrigger={false}
            rules={[
              {
                required: true,
              },
              {
                type: "email",
              },
            ]}
            icon="fas fa-user"
          />

          <StylezedInput
            label="Senha"
            name="password"
            validateTrigger={false}
            extra={
              errorRequest && (
                <span style={{ color: "red" }}>{errorRequest}</span>
              )
            }
            rules={[
              { required: true, message: "Por favor insira sua senha." },
              { min: 6, message: "Toda senha tem ao menos 6 caracteres." },
              {
                pattern: /(?=.*[!@#$%^&*~_-])/,
                message: "P.S.: Deve conter ao menos um desses: !@#$%^&*~_-",
              },
            ]}
            icon="fas fa-lock"
          />
          <StyledFormItem>
            <StyledButton type="primary" htmlType="submit">
              Enviar
            </StyledButton>
            <StyledButton onClick={() => setShowLogin(false)}>Retornar</StyledButton>
          </StyledFormItem>
        </StyledForm>
      </AdjustModal>
    </StyledModal>
  );
};

export default LoginModal;
