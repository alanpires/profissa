import React from "react";
import LisaimgSvg from "../../pages/homepage/photos/lisa.svg";
import FernandoimgSvg from "../../pages/homepage/photos/fernando.svg";
import RenataimgSvg from "../../pages/homepage/photos/renata.svg";
import LucianoSvg from "../../pages/homepage/photos/luciano.svg";
import { Estrela } from "../../pages/homepage/style";

const spanStyle = {
  marginTop: "-35px",
};

const styleH4 = {
  marginTop: "10px",
};

const costyleContent = {
  marginTop: "-15px",
};

const imgStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%"
};

const BestRating = ({ name, avaliations, stars, service, key, image }) => {
  console.log(image)
  return (
    <div key={key}>
      <img style={imgStyle} src={image} alt="image" />
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
