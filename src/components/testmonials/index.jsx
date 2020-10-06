import React from "react";
import { DivTestmonials, DivImag, DivInfoClient } from "./style";

const Testmonials = ({ image, name, feedback }) => {
  return (
    <DivTestmonials>
      <DivInfoClient>
        <DivImag>
          <img src={image} />
        </DivImag>
        <p>{name}</p>
      </DivInfoClient>
      <span>{feedback}</span>
    </DivTestmonials>
  );
};

export default Testmonials;
