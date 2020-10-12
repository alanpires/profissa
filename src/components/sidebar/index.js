import React from "react";
import SidebarRow from "./sidebar-row.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanToken } from "../../redux/actions/access-actions";

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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);

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
          onClick={() => {
            window.localStorage.clear();
            dispatch(cleanToken("", {}));
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
