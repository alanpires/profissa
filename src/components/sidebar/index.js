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

function Sidebar({ setDiv1, setDiv2, setDiv3, setInfos, menuBars }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access.token);

  return (
    <>
      <MainDiv>
        {menuBars.map((elem, key) => (
          <Anchor
            key={key}
            onClick={() => {
              setInfos(elem);
            }}
          >
            <SidebarRow title={elem} />
          </Anchor>
        ))}
        <AnchorLogout
          onClick={() => {
            window.localStorage.clear();
            dispatch(cleanToken("", {}));
            history.push("/");
            console.log(token);
          }}
        >
          <SidebarRow title="Logout" />
        </AnchorLogout>
      </MainDiv>
    </>
  );
}

export default Sidebar;
