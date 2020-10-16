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
  axios.get("https://profissa-server.herokuapp.com/feedbacks").then((res) => {
    dispatch(profissaFeedback(res.data));
  });
};

const postFeedbackProfissa = (feedback) => ({
  type: FEEDBACKS,
  feedback,
});

export const postFeeback = () => (dispatch) => {
  axios.get("https://profissa-server.herokuapp.com/feedbacks").then((res) => {
    dispatch(postFeedbackProfissa(res.data));
  });
};