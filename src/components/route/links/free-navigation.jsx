import React from "react";
import { Link } from "react-router-dom";
import { freeArea } from "../helper";

const FreeLinks = () => {
  return (
    <>
      {freeArea.map((route, key) => (
        <Link key={key} to={route.path}>
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default FreeLinks;
