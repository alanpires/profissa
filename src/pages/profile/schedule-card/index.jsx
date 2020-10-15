import React from "react";
// import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../pages/homepage/photos/ricardo.svg";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
const ScheduleCard = ({ infos: { details, schedule, profissa }, creator }) => {

  return (
    <div
    // onClick={() =>
    //   history.push(`/professional-showcase/${creator.id}/${creator.cep}`)
    // }
    >
      <Card>
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

const Card = styled.div`
   width: 300px;
   height: 400px;
   margin:30px;
   padding:30px;
   background: gray;
`

const Text = styled.div`
    overflow-y: auto;
   flex:1;
   p{
    font-size: 15px;
    height:80px;
  }
  
`
const ScheduleDate = styled.div`
 display: flex;
  align-items: center;
  justify-content:center;
  p{
    height: 100%;
    margin:0;
  }
  svg{
    margin-right: 10px;
    transform: scale(2)
  }
  margin-bottom:20px;
`

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  font-family: "Poppins";
 
  h1{
    font-size: 20px;
 
  }
`;

export const EstrelaCards = styled(BsStarFill)`
  color: #ffed47;
  width: 25px;
  height: 24px;
`;
