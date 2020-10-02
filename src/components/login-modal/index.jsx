import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { axiosConfig } from "./helper";
import {
  requestLogin,
  requestUserDecoder,
} from "../../redux/actions/access-actions";
<<<<<<< HEAD
// import jwt_decode from "jwt-decode";
=======
>>>>>>> master

import { Form, Input, Button } from "antd";
import {
  Title,
  StyledModal,
  StyledForm,
  AdjustModal,
  StyledInput,
  StyledPassword,
} from "./style";

const LoginModal = () => {
<<<<<<< HEAD
  const token = useSelector((state) => state.access.token);
  // const decoded = jwt_decode(token);
  // console.log(decoded);
=======
  const user = useSelector((state) => state.access.user);
>>>>>>> master

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const errorRequest = useSelector((state) => state.messagesLogin.errorRequest);
  const token = useSelector((state) => state.access.token);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(requestLogin(values));
<<<<<<< HEAD
    if (token) {
      // dispatch(requestUserDecoder(decoded.sub, token));
    }
=======
    // if (token) {
    //   const decoded = jwt_decode(token);
    //   console.log(decoded);
    //   dispatch(requestUserDecoder(decoded.sub, axiosConfig(token)));
    // }
>>>>>>> master
  };
  console.log(user.type);
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
          <StyledForm.Item
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
          >
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item
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
          >
            <StyledInput />
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

export default LoginModal;
