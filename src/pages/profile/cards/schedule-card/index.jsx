import React from "react";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../../pages/homepage/photos/ricardo.svg";
import { AiOutlineSchedule } from "react-icons/ai";

import {
  InfoCard,
  ScheduleDate,
  Text,
  CardStyle
} from "../cardStyle"

const ScheduleCard = ({ infos: { details, schedule, profissa }, creator }) => {

  const history = useHistory();

  return (
    <div
      onClick={() =>
        history.push(`/professional-showcase/${profissa.id}/${profissa.cep}`)
      }
    >
      <Card styles={CardStyle}>
        <InfoCard>
          <img src={RicardoSvg} />
          <h1>{creator && creator.name}</h1>
          <ScheduleDate><AiOutlineSchedule /><p>{schedule.split("-").reverse().join("/")}</p></ScheduleDate>
          <Text><p>{details}</p></Text>

        </InfoCard>
      </Card>
    </div>
  );
};

export default ScheduleCard;




