import React from "react";
import LisaimgSvg from "../../pages/homepage/photos/lisa.svg";
import FernandoimgSvg from "../../pages/homepage/photos/fernando.svg";
import RenataimgSvg from "../../pages/homepage/photos/renata.svg";
import LucianoSvg from "../../pages/homepage/photos/luciano.svg";
import { Estrela } from "../../pages/homepage/style";
import { StyleImg } from "./style";

const spanStyle = {
  marginTop: "-35px",
};

const styleH4 = {
  marginTop: "10px",
};

const costyleContent = {
  marginTop: "-15px",
};

const BestRating = ({ name, avaliations, stars, service, key, image }) => {
  const arrayImage = [LisaimgSvg, FernandoimgSvg, RenataimgSvg, LucianoSvg];

  const handleImage = () => {
    let image = Math.floor(Math.random() * 3);
    return arrayImage[image];
  };

  return (
    <div key={key}>
      <StyleImg src={image ? image.image : handleImage()} />
      <p>{name}</p>
      <span style={spanStyle}>
        {service}
        <Estrela /> <h4 style={styleH4}>{stars} </h4>
      </span>
      <content style={costyleContent}>{avaliations} avaliações</content>
    </div>
  );
};

export default BestRating;
