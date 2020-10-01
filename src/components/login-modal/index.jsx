import React, { useState } from "react";
import { Modal } from "lib-kenzie-academy";
import { Form, Input, Button } from "antd";
import { Title, StyledDiv, StyleModal } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  requestLogin,
  requestUserDecoder,
} from "../../redux/actions/access-actions";
import jwt_decode from "jwt-decode";
import { axiosConfig } from "./helper";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const errorRequest = useSelector((state) => state.messagesLogin.errorRequest);
  const token = useSelector((state) => state.access.token);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(requestLogin(values));
    // if (token) {
    //   const decoded = jwt_decode(token);
    //   console.log(decoded);
    //   dispatch(requestUserDecoder(decoded.sub, axiosConfig(token)));
    // }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Abrir modal</button>
      <StyleModal isOpen={showModal}>
        <Title>Conecte-se</Title>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
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
            <Input />
          </Form.Item>

          <Form.Item
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
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={() => setShowModal(false)}>Return</Button>
          </Form.Item>
        </Form>
      </StyleModal>
    </div>
  );
};

export default LoginModal;
