import { FEEDBACKS } from "./type";
import axios from "axios";

// const axiosConfig = (token) => ({
//   headers: {
//     Authorization: "Bearer " + token,
//   },
// });

const profissaFeedback = (feedback) => ({
  type: FEEDBACKS,
  feedback,
});

export const requestFeedbacks = () => (dispatch) => {
  // console.log(axiosConfig(token));
  axios.get("https://profissa-server.herokuapp.com/feedbacks").then((res) => {
    console.log(res);
    dispatch(profissaFeedback(res.data));
  });
};
