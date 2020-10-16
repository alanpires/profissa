import React from "react";
import Testmonials from "../testmonials/index";
import { DivContent, DivPositionExample } from "./style";
import ellipse4 from "./img-example/ellipse4.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { feedbacksId } from "./helper";

const FeedbacksProfissa = () => {
  const params = useParams();
  const feedbacks = useSelector(
    (state) => state.profissaFeedbacks.feedbacksRequest
  );
  const users = useSelector((state) => state.users);
  console.log(feedbacks);

  return (
    <DivPositionExample>
      <DivContent>
        <h1>Feedbacks recebidos</h1>
        {feedbacks &&
          feedbacksId(feedbacks, params.id).map((info, key) => {
            let userImage = users.find(
              (elem) => elem.email === info.creator.email
            );
            console.log(userImage);
            console.log(info.creator);
            return (
              <Testmonials
                key={key}
                image={userImage ? userImage.image : ellipse4}
                name={info.creator.name}
                feedback={info.feedback}
              />
            );
          })}
      </DivContent>
    </DivPositionExample>
  );
};

export default FeedbacksProfissa;
