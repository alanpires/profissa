import React, { useState, useEffect } from "react";
import { Avatar, Button } from "antd";
import {
  DivAvatarCard,
  Username,
  InputDiv,
  BtnDiv,
  ItemsDiv,
  NewInput,
} from "./style.js";
import { UserOutlined } from "@ant-design/icons";
import { AiFillEdit } from "react-icons/ai";
import { Modal } from "lib-kenzie-academy";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function AvatarCard() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);
  const user = useSelector((state) => state.access.user);
  const [modal, setModal] = useState(false);

  const changeInfo = () => {
    setModal(false);
  };

  return (
    <>
      <DivAvatarCard>
        <Avatar size={100} icon={<UserOutlined />} />
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
            <form>
              {" "}
              <ItemsDiv>
                <NewInput
                  placeholder="Nome completo"
                  name="name"
                  defaultValue={user.name}
                />
              </ItemsDiv>
              <ItemsDiv>
                <NewInput
                  placeholder="Email"
                  name="email"
                  defaultValue={user.email}
                />
              </ItemsDiv>
              <ItemsDiv>
                {" "}
                <NewInput placeholder="Senha" type="password" name="password" />
              </ItemsDiv>
              <ItemsDiv>
                <NewInput
                  placeholder="Endereço"
                  name="adress"
                  defaultValue={user.adress}
                />
              </ItemsDiv>
              <BtnDiv>
                <Button onClick={changeInfo}>Alterar Dados</Button>
              </BtnDiv>
            </form>
          </InputDiv>
        </Modal>
      )}
    </>
  );
}

export default AvatarCard;
