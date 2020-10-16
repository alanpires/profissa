import React, { useState, useEffect } from "react";
import { Avatar, Button, Form } from "antd";
import {
  DivAvatarCard,
  Username,
  InputDiv,
  BtnDiv,
  ItemsDiv,
  NewInput,
  Container,
  StyleImg,
} from "./style.js";
import { UserOutlined } from "@ant-design/icons";
import { AiFillEdit } from "react-icons/ai";
import { Modal } from "lib-kenzie-academy";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeDataUser } from "../../redux/actions/access-actions";

function AvatarCard() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);
  const user = useSelector((state) => state.access.user);
  const [modal, setModal] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setModal(false);
    if (values.name || values.email) {
      !values.name && (values.name = user.name);
      !values.email && (values.email = user.email);
      dispatch(changeDataUser(values));
      localStorage.setItem("user", JSON.stringify({ ...user, ...values }));
    }
  };

  return (
    <Container>
      <DivAvatarCard>
        {user.image ? (
          <StyleImg src={user.image} />
        ) : (
          <Avatar size={100} icon={<UserOutlined />} />
        )}
        <Username>
          <strong>{user.name}</strong>
        </Username>
        <Button
          type="primary"
          shape="circle"
          icon={<AiFillEdit />}
          size="large"
          onClick={() => {
            setModal(true);
          }}
        />
      </DivAvatarCard>
      {modal && (
        <Modal isOpen={modal}>
          <InputDiv>
            <Form onFinish={onFinish}>
              <ItemsDiv>
                <Form.Item name="name">
                  <NewInput
                    placeholder="Nome completo"
                    defaultValue={user.name}
                    value={user.name}
                  />
                </Form.Item>
              </ItemsDiv>

              <ItemsDiv>
                <Form.Item name="email">
                  <NewInput
                    placeholder="Email"
                    defaultValue={user.email}
                    value={user.email}
                  />
                </Form.Item>
              </ItemsDiv>

              <BtnDiv>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Alterar Dados
                  </Button>
                </Form.Item>
              </BtnDiv>
            </Form>
          </InputDiv>
        </Modal>
      )}
    </Container>
  );
}

export default AvatarCard;
