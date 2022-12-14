import { SCHEDULES } from "./type";
import axios from "axios";

const schedules = (schedules) => ({
  type: SCHEDULES,
  schedules,
});

export const requestSchedules = (
  data,
  axiosConfig,
  openNotificationSuccess,
  openNotificationFailed,
  setShowModal
) => (dispatch) => {
  axios
    .post("https://profissa-server.herokuapp.com/schedule", data, axiosConfig)
    .then((res) => {
      console.log(res.data);
      dispatch(schedules(res.data));
      openNotificationSuccess();
      setShowModal(false);
    })
    .catch((res) => {
      console.log(res);
      openNotificationFailed();
    });
};
