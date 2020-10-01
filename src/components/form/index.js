import React from "react";
import { FormDiv } from "./style.js";
import { Form, Input, Button, Checkbox } from "antd";
import axios from 'axios'


const FormUser = () => {
  const onFinish = (values) => {
 SignUp(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const SignUp = (data) => {
    axios
      .post("https://profissa-server.herokuapp.com/register", {...data})
      .then((res) => {
        if (res.status === 201) {
         console.log('usuario criado')
      
        } 
      });
  };



  return (
    <FormDiv>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          rules={[
            {
              pattern: /[A-Za-z]+[ ]+[A-Za-z]{2}/,
              message: "Deve haver pelo menos dois nomes.",
            },
            {
              pattern: /^[a-z ]+$/i,
              message:
                "Nomes não podem conter caracteres especiais, incluindo acentuação.",
            },
            {
              required: true,
              message: "Por favor digite seu nome",
            },
          ]}
        >
          <Input placeholder="Escreva seu nome completo" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "E-mail inválido.",
            },
            {
              required: true,
              message: "Por favor digite seu nome",
            },
          ]}
        >
          <Input placeholder="Digite seu e-mail" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              min: 6,
              message: "A senha deve conter pelo menos 6 caracteres.",
            },
            {
              pattern: /[^a-zA-Z 0-9]+/g,
              message: "Senha deve conter pelo menos um caractere especial.",
            },
            {
              required: true,
              message: "Por favor insira sua senha.",
            },
          ]}
        >
          <Input.Password placeholder="Digite sua senha" size="large" />
        </Form.Item>

        <Form.Item
          name="cpf"
          rules={[
            {
              min: 11,
              message: "O CPF deve conter no minimo 8 digitos",
            },
            {
              pattern: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
              message: "CPF inválido",
            },
            {
              required: true,
              message: "Por favor insira seu CPF",
            },
          ]}
        >
          <Input placeholder="Digite seu CPF" size="large" />
        </Form.Item>
        <Form.Item
          name="adress"
          rules={[
            {
              required: true,
              message: "Por favor digite seu endereço",
            },
          ]}
        >
          <Input placeholder="Onde você mora?" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default FormUser;
