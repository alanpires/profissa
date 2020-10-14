import React from "react";
import { Titles, ItemsRow } from "./style.js";

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <>
      <ItemsRow>
        {Icon && <Icon />}
        <Titles>{title}</Titles>
      </ItemsRow>
    </>
  );
};

export default SideBarRow;
