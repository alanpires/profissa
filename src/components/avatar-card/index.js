import React, { useState } from "react";
import { Avatar, Button } from "antd";
import {
  DivAvatarCard,
  Username,
  InputDiv,
  BtnDiv,
  ItemsDiv,
  NewInput,
  Container
} from "./style.js";
import { UserOutlined } from "@ant-design/icons";
import { AiFillEdit } from "react-icons/ai";
import { Modal } from "lib-kenzie-academy";

function AvatarCard() {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <DivAvatarCard>
        <Avatar size={100} icon={<UserOutlined />} />
        <Username>
          <strong>Lucas Duarte</strong>
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
            <ItemsDiv>
              <NewInput placeholder="Nome completo" />
            </ItemsDiv>
            <ItemsDiv>
              <NewInput placeholder="Email" />
            </ItemsDiv>
            <ItemsDiv>
              {" "}
              <NewInput placeholder="Senha" />
            </ItemsDiv>
            <ItemsDiv>
              <NewInput placeholder="Endereço" />
            </ItemsDiv>
            <BtnDiv>
              <Button type="primary">Alterar Dados</Button>
            </BtnDiv>
          </InputDiv>
        </Modal>
      )}
    </Container>
  );
}

export default AvatarCard;
