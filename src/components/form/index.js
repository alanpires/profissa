import React, { useState } from "react";
import { FormDiv, CheckboxText, NewInput, StyledFormItem } from "./style.js";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"

const FormUser = () => {
  const [cep, setCep] = useState("");
  const [input, showInput] = useState(false);
  const [userData, setuserData] = useState("");
  const [cepError, setCepError] = useState("");
  const requestApi = () => {
    if (cep.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          return setCepError("Por favor insira um cep válido!");
        } else {
          setuserData(data);
          showInput(true);
          setCepError("");
        }
      });
  };

  const onFinish = (values) => {
    if (userData) {
      SignUp(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const SignUp = (data) => {
    const openNotificationFailed = (data) => {
      notification.open({
        message: "Erro inesperado",
        description: data,
        icon: <FrownOutlined style={{ color: "red" }} />,
      });
    };
    const openNotificationSuccess = () => {
      notification.open({
        message: "Profissa contrato com sucesso",
        description: "Parabéns, agora você pode fazer o login!",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    };
    axios
      .post("https://profissa-server.herokuapp.com/register", { ...data })
      .then((res) => {
        if (res.status === 201) {
          console.log("usuario criado", res);
          openNotificationSuccess();
        }
      })
      .catch((res) => {
        console.log(res.response.data);
        openNotificationFailed(res.response.data);
      });
  };

  return (
    <FormDiv>
      <Form
        name="basic"
        initialValues={{
          "checkbox-group": ["Cliente", "Profissa"],
        }}
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
          <NewInput placeholder="Escreva seu nome completo" size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail inválido.",
            },
            {
              required: true,
              message: "Por favor digite seu nome",
            },
          ]}
        >
          <NewInput placeholder="Digite seu e-mail" size="large" />
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
          <NewInput
            type="password"
            placeholder="Digite sua senha"
            size="large"
          />
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
          <NewInput placeholder="Digite seu CPF" size="large" />
        </Form.Item>
        <Form.Item
          name="cep"
          onChange={(e) => setCep(e.target.value)}
          onBlur={requestApi}
          rules={[
            {
              required: true,
              message: "Por favor digite seu CEP",
            },
            {
              pattern: /^[0-9]*$/,
              message: "Deve conter apenas números, sem caracteres especiais",
            },
            {
              min: 8,
              message: "Deve conter 8 números",
            },
          ]}
        >
          <NewInput placeholder="Digite seu CEP" size="large" />
        </Form.Item>
        {cepError && <span style={{ color: "red" }}>{cepError}</span>}
        {input && (
          <>
            {userData.logradouro ? (
              <NewInput
                size="large"
                value={userData.logradouro}
                name="logradouro"
              />
            ) : (
                <Form.Item
                  name="logradouro"
                  rules={[
                    {
                      required: true,
                      message: "Por favor digite o logradouro",
                    },
                  ]}
                >
                  <NewInput size="large" name="logradouro" />
                </Form.Item>
              )}
            <Form.Item
              name="complemento"
              rules={[
                {
                  required: true,
                  message: "Por favor digite o complemento",
                },
              ]}
            >
              <NewInput size="large" name="complemento" />
            </Form.Item>

            {userData.bairro ? (
              <NewInput size="large" value={userData.bairro} name="bairro" />
            ) : (
                <Form.Item
                  name="bairro"
                  rules={[
                    {
                      required: true,
                      message: "Por favor digite o bairro",
                    },
                  ]}
                >
                  <NewInput size="large" name="bairro" />
                </Form.Item>
              )}
            {userData.localidade ? (
              <NewInput
                size="large"
                value={userData.localidade}
                name="localidade"
              />
            ) : (
                <Form.Item
                  name="localidade"
                  rules={[
                    {
                      required: true,
                      message: "Por favor digite sua cidade",
                    },
                  ]}
                >
                  <NewInput size="large" name="localidade" />
                </Form.Item>
              )}
            {userData.uf ? (
              <NewInput size="large" value={userData.uf} name="uf" />
            ) : (
                <Form.Item
                  name="uf"
                  rules={[
                    {
                      required: true,
                      message: "Por favor digite seu estado",
                    },
                  ]}
                >
                  <NewInput size="large" name="uf" />
                </Form.Item>
              )}
          </>
        )}
        <StyledFormItem name="select" label="Selecione seu tipo de perfil">
          <Checkbox.Group>
            <Checkbox value="Cliente">Cliente</Checkbox>

            <Checkbox value="Profissa">Profissa</Checkbox>
          </Checkbox.Group>
        </StyledFormItem>
        <StyledFormItem>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
          <Button type="primary" htmlType="submit">
            <Link to="/">Retornar</Link>
          </Button>
        </StyledFormItem>
      </Form>
    </FormDiv>
  );
};

export default FormUser;
