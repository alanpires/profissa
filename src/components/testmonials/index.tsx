import React from "react";
import { DivTestmonials, DivImag, DivInfoClient, StyleImg } from "./style";

interface Props {
  image: string;
  name: string;
  feedback: string;
}

const Testmonials = ({ image, name, feedback }: Props) => {
  return (
    <DivTestmonials>
      <DivInfoClient>
        <DivImag>
          <StyleImg src={image} />
        </DivImag>
        <p>{name}</p>
      </DivInfoClient>
      <span>{feedback}</span>
    </DivTestmonials>
  );
};

export default Testmonials;
