import { PROFISSAS } from "./type";
import axios from "axios";

const profissasHomepage = (profissa) => ({
  type: PROFISSAS,
  profissa,
});

export const requestProfissasHomepage = () => (dispatch) => {
  axios.get("https://profissa-server.herokuapp.com/users").then((res) => {
    console.log(res.data);

    dispatch(profissasHomepage(res.data));
  });
};
