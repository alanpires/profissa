import { FEEDBACKS } from "./type";
import axios from "axios";

const profissaFeedback = (feedback) => ({
  type: FEEDBACKS,
  feedback,
});

export const requestFeedbacks = () => (dispatch) => {
  axios.get("https://profissa-server.herokuapp.com/feedbacks").then((res) => {
    dispatch(profissaFeedback(res.data));
  });
};

export const postFeedback = (
  data,
  axiosconfig,
  openNotificationSuccess,
  openNotificationFailed,
  setModal
) => (dispatch) => {
  axios
    .post("https://profissa-server.herokuapp.com/feedbacks", data, axiosconfig)
    .then((res) => {
      console.log(res);
      openNotificationSuccess();
      setModal(false);
    })
    .catch((res) => {
      console.log(res);
      openNotificationFailed();
    });
};
