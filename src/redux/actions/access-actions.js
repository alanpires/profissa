import { DECODER, LOGIN, LOGIN_ERROR } from "./type";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { axiosConfig } from "../../components/login-modal/helper";

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
      if (res.data.accessToken) {
        const decoded = jwt_decode(res.data.accessToken);
        dispatch(
          requestUserDecoder(decoded.sub, axiosConfig(res.data.accessToken))
        );
      }
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

const requestUserDecoder = (id, token) => (dispatch) => {
  axios
    .get(`https://profissa-server.herokuapp.com/users/${id}`, token)
    .then((res) => {
      console.log(res);
      dispatch(userDecoder(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));
    });
};
