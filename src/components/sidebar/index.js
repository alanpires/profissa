import React from "react";
import SidebarRow from "./sidebar-row.js";

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

function Sidebar() {
  return (
    <>
      <MainDiv>
        <Anchor href="/timeline">
          <SidebarRow Icon={HomeIcon} title="Serviços Solicitados" />
        </Anchor>
        <Anchor href="/search-books">
          <SidebarRow Icon={BookIcon} title="Pesquisar" />
        </Anchor>
        <Anchor href="/shelves">
          <SidebarRow Icon={ShelfIcon} title="Estantes" />
        </Anchor>
        <Anchor href="/profile">
          <SidebarRow Icon={ProfileIcon} title="Perfil" />
        </Anchor>
        <AnchorLogout>
          <SidebarRow Icon={logoutIcon} title="Logout" />
        </AnchorLogout>
      </MainDiv>
    </>
  );
}

export default Sidebar;
