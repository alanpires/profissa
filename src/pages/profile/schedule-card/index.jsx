import React from "react";
import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../pages/homepage/photos/ricardo.svg";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
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

const CardStyle = `
  transition: 0.2s cubic-bezier(0.17,0.67,0.83,0.67);
  &:hover{
    transform: scale(1.2);
    
  }
`

const Text = styled.div`
   overflow-y: auto;
   flex:1;
   width: 80%;
   p{
    font-size: 15px;
    height:80px;
    margin: 0 auto;
    text-align:center;
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
  img{
   margin: 10px 0 5px 0;
  }
`;

export const EstrelaCards = styled(BsStarFill)`
  color: #ffed47;
  width: 25px;
  height: 24px;
`;


