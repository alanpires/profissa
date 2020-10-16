import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../../pages/homepage/photos/ricardo.svg";
import { requestFeedbacks } from "../../../../redux/actions/feedbacks-request";
import { serviceRequest } from "../../../../redux/actions/service-request";
import { requestUsers } from "../../../../redux/actions/users";

import {
  InfoCard,
  FeedbackStars,
  Text,
  EstrelaCards,
  CardStyle,
  StyleImg,
} from "../cardStyle";

const FeedbackCard = ({ infos: { feedback, stars }, creator }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFeedbacks());
    dispatch(serviceRequest());
    dispatch(requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card styles={CardStyle}>
        <InfoCard
          onClick={() =>
            creator.select[0] == "Profissa" &&
            history.push(`/professional-showcase/${creator.id}/${creator.cep}`)
          }
        >
          <StyleImg src={creator.image ? creator.image : RicardoSvg} />
          <h1>{creator.name}</h1>
          <FeedbackStars>
            <h1>{stars}</h1>
            {Array.from({ length: stars }, (v, k) => k).map((key) => {
              return <EstrelaCards key={key} />;
            })}
          </FeedbackStars>
          <Text>
            <p>{feedback}</p>
          </Text>
        </InfoCard>
      </Card>
    </div>
  );
};

export default FeedbackCard;
