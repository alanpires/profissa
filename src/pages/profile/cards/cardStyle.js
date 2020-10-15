import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const CardStyle = `
  transition: 0.2s cubic-bezier(0.17,0.67,0.83,0.67);
  &:hover{
    transform: scale(1.2);
    
  }
`

export const Text = styled.div`
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

export const FeedbackStars = styled.div`
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

export const ScheduleDate = styled.div`
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
