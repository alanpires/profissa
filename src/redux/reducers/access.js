import { LOGIN, DECODER } from "../actions/type";

const defaultState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const access = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token };

    case DECODER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default access;
