import { INFOS_PROFISSA } from "./type";
import axios from "axios";

const infosProfissa = (infosProfissa) => ({
  type: INFOS_PROFISSA,
  infosProfissa,
});

export const requestInfosProfissa = (id, axiosConfig) => (dispatch) => {
  axios
    .get(`https://profissa-server.herokuapp.com/users/${id}`, axiosConfig)
    .then((res) => {
      console.log(res.data);
      dispatch(infosProfissa(res.data));
    })
    .catch((res) => {
      console.log(res);
    });
};
