import React from "react";
import { Link } from "react-router-dom";
import { restrictedArea } from "../helper";

const RestrictedLinks = () => {
  return (
    <>
      {restrictedArea.map((route, key) => (
        <Link key={key} to={route.path}>
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default RestrictedLinks;
