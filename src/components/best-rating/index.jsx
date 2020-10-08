import React from "react";
import LisaimgSvg from "../../pages/homepage/photos/lisa.svg";
import FernandoimgSvg from "../../pages/homepage/photos/fernando.svg";
import RenataimgSvg from "../../pages/homepage/photos/renata.svg";
import LucianoSvg from "../../pages/homepage/photos/luciano.svg";
import { Estrela } from "../../pages/homepage/style";

const BestRating = ({ name, avaliations, stars }) => {
  const arrayImage = [LisaimgSvg, FernandoimgSvg, RenataimgSvg, LucianoSvg];

  const handleImage = () => {
    let image = Math.floor(Math.random() * 3);
    return arrayImage[image];
  };

  return (
    <div>
      <img src={handleImage()} />
      <p>{name}</p>
      <span>
        {stars} <Estrela /> {avaliations} avaliações
      </span>
    </div>
  );
};

export default BestRating;
