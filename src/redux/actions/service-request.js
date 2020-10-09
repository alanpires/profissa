import { SERVICE_RESQUEST } from "./type";
import axios from "axios";

const services = (serviceRequest) => ({
  type: SERVICE_RESQUEST,
  serviceRequest,
});

export const serviceRequest = (axiosConfig) => (dispatch) => {
  axios
    .get("https://profissa-server.herokuapp.com/schedule", axiosConfig)
    .then((res) => {
      console.log(res.data);
      dispatch(services(res.data));
    })
    .catch((res) => {
      console.log(res);
    });
};
