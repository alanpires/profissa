import React, { useState } from "react";
import { Avatar, Button } from "antd";
import { DivAvatarCard, Username } from "./style.js";
import { UserOutlined } from "@ant-design/icons";
import { AiFillEdit } from "react-icons/ai";
import { Modal } from "lib-kenzie-academy";

function AvatarCard() {
  const [modal, setModal] = useState(false);
  return (
    <>
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
      {modal && <Modal isOpen={modal} />}
    </>
  );
}

export default AvatarCard;
