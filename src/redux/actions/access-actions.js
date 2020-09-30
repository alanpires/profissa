import { LOGIN, LOGIN_ERROR } from "./type";
import axios from "axios";

const login = (token) => ({
  type: LOGIN,
  token,
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const requestLogin = (data) => (dispatch) => {
  axios
    .post("https://profissa-server.herokuapp.com/login", data)
    .then((res) => {
      console.log(res.data);
      dispatch(login(res.data.accessToken));
      localStorage.setItem("token", res.data.accessToken);
    })
    .catch((res) => {
      console.log(res);
      dispatch(loginError("request error"));
    });
};
