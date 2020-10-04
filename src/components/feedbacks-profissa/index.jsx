import React from "react";
import Testmonials from "../testmonials/index";
import { DivContent } from "./style";
import ellipse4 from "./img-example/ellipse4.png";
import ellipse5 from "./img-example/ellipse5.png";

const FeedbacksProfissa = () => {
  const example = [
    {
      image: ellipse4,
      name: "João",
      feedback:
        "Excelente profissional, fez um ótimo trabalho, recomendo a todos.",
    },
    {
      image: ellipse5,
      name: "Maria",
      feedback:
        "Excelente profissional, fez um ótimo trabalho, recomendo a todos.",
    },
    {
      image: ellipse4,
      name: "Pedro",
      feedback:
        "Excelente profissional, fez um ótimo trabalho, recomendo a todos.",
    },
    {
      image: ellipse5,
      name: "Lucas",
      feedback:
        "Excelente profissional, fez um ótimo trabalho, recomendo a todos.",
    },
  ];
  return (
    <DivContent>
      <h1>Feedbacks recebidos</h1>
      {example.map((info, key) => (
        <Testmonials
          key={key}
          image={info.image}
          name={info.name}
          feedback={info.feedback}
        />
      ))}
    </DivContent>
  );
};

export default FeedbacksProfissa;
