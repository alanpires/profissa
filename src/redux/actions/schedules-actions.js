import { SCHEDULES } from "./type";
import axios from "axios";

const schedules = (schedules) => ({
  type: SCHEDULES,
  schedules,
});

export const requestSchedules = (data, axiosConfig) => (dispatch) => {
  axios
    .post("https://profissa-server.herokuapp.com/schedules", data, axiosConfig)
    .then((res) => {
      console.log(res.data);
      dispatch(schedules(res.data));
    })
    .catch((res) => {
      console.log(res);
    });
};
