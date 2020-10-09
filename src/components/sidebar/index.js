import React from "react";
import SidebarRow from "./sidebar-row.js";
import { useHistory } from "react-router-dom";

import {
  ClickLogo,
  Logo,
  HomeIcon,
  BookIcon,
  ShelfIcon,
  ProfileIcon,
  logoutIcon,
  MainDiv,
  Anchor,
  AnchorLogout,
} from "./style";

function Sidebar({ setDiv1, setDiv2, setDiv3 }) {
  const history = useHistory();

  return (
    <>
      <MainDiv>
        <Anchor
          onClick={() => {
            setDiv1(true);
            setDiv2(false);
            setDiv3(false);
          }}
        >
          <SidebarRow title="Serviços Solicitados" />
        </Anchor>
        <Anchor
          onClick={() => {
            setDiv1(false);
            setDiv2(true);
            setDiv3(false);
          }}
        >
          <SidebarRow title="Avaliações" />
        </Anchor>
        <Anchor
          onClick={() => {
            setDiv1(false);
            setDiv2(false);
            setDiv3(true);
          }}
        >
          <SidebarRow title="ETC" />
        </Anchor>
        <AnchorLogout
          OnClick={() => {
            window.alert("olá");
            window.localStorage.clear();
            history.push("/");
          }}
        >
          <SidebarRow title="Logout" />
        </AnchorLogout>
      </MainDiv>
    </>
  );
}

export default Sidebar;
