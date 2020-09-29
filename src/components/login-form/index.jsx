import React, { useState } from "react";
import { Modal } from "lib-kenzie-academy";
import { Form, Input, Button, Checkbox } from "antd";
import { Title } from "./style";
import StylezedInput from "../input";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = () => {
  const [showModal, setShowModal] = useState(true);

  const onFinish = (values) => {
    console.log("Success:", values);
    setShowModal(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Abrir modal</button>
      <Modal isOpen={showModal}>
        <Title>Conecte-se</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <StylezedInput
            icon="fas fa-user"
            name="user"
            label="Username"
            type="text"
          />

          <StylezedInput
            icon="fas fa-lock"
            name="password"
            label="Password"
            type="password"
          />

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginForm;
