import React from "react";
// import { Card } from "lib-kenzie-academy";
import { useHistory } from "react-router-dom";
import RicardoSvg from "../../../pages/homepage/photos/ricardo.svg";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

const FeedbackCard = ({ infos: { feedback, stars }, creator }) => {
  const history = useHistory()
  console.log(creator)
  return (
    <div
      onClick={() =>
        history.push(`/professional-showcase/${creator.id}/${creator.cep}`)
      }
    >
      <Card>
        <InfoCard>
          <img src={RicardoSvg} />
          <FeedbackStars>
            <h1>{stars}</h1>
            {Array.from({ length: stars }, (v, k) => k).map(
              (key) => {
                return <EstrelaCards key={key} />
                  ;
              }
            )}
          </FeedbackStars>
          <h1>{creator.name}</h1>
          <FeedbackText><p>{feedback}</p></FeedbackText>

        </InfoCard>
      </Card>
    </div>
  );
};

export default FeedbackCard;


const FeedbackStars = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 100%;
h1{
  margin: 0 4px 0 0;
    display: block;
    font-size: 24px;
    width: 22px;
    height: 22px;
    display:flex;
justify-content:center;
align-items:center;
}
`
const Card = styled.div`
   width: 300px;
   height: 400px;
   margin:30px;
   padding:30px;
   background: gray;
`

const FeedbackText = styled.div`
    overflow-y: auto;
   flex:1;

`
export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  font-family: "Poppins";
  text-align:center;
  p{
    font-size: 15px;
    height:80px;
    
  }

`;

export const EstrelaCards = styled(BsStarFill)`
  color: #ffed47;
  width: 25px;
  height: 24px;
`;
