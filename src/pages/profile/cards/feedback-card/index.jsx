import React from "react";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../../pages/homepage/photos/ricardo.svg";

import {
  InfoCard,
  FeedbackStars,
  Text,
  EstrelaCards,
  CardStyle
} from "../cardStyle"

const FeedbackCard = ({ infos: { feedback, stars }, creator }) => {
  const history = useHistory()
  return (
    <div>
      <Card styles={CardStyle}>
        <InfoCard
          onClick={() =>
            history.push(`/professional-showcase/${creator.id}/${creator.cep}`)
          }
        >
          <img src={RicardoSvg} />
          <h1>{creator.name}</h1>
          <FeedbackStars>
            <h1>{stars}</h1>
            {Array.from({ length: stars }, (v, k) => k).map(
              (key) => {
                return <EstrelaCards key={key} />
                  ;
              }
            )}
          </FeedbackStars>
          <Text><p>{feedback}</p></Text>

        </InfoCard>
      </Card>
    </div>
  );
};

export default FeedbackCard;

