import { PROFISSAS } from "./type";
import axios from "axios";

const profissasHomepage = (profissa) => ({
  type: PROFISSAS,
  profissa,
});

export const requestProfissasHomepage = () => (dispatch) => {
  axios.get("https://profissa-server.herokuapp.com/users").then((res) => {
    dispatch(profissasHomepage(res.data));
  });
};
