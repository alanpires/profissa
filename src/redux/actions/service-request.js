import { SERVICE_RESQUEST } from "./type";
import axios from "axios";

const servicesRequest = (serviceRequest) => ({
  type: SERVICE_RESQUEST,
  serviceRequest,
});

export const serviceRequest = (axiosConfig) => (dispatch) => {
  axios
    .get("https://profissa-server.herokuapp.com/schedule", axiosConfig)
    .then((res) => {
      dispatch(servicesRequest(res.data));
    })
    .catch((res) => {
      console.log(res);
    });
};
