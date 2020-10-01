import { DECODER, LOGIN, LOGIN_ERROR } from "./type";
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

const userDecoder = (user) => ({
  type: DECODER,
  user,
});

export const requestUserDecoder = (id, token) => (dispatch) => {
  axios
    .get(`https://profissa-server.herokuapp.com/users/${id}`, token)
    .then((res) => {
      console.log(res);
      // dispatch(userDecoder(res));
      // localStorage.setItem("user", JSON.stringify(res.data.user));
    });
};
