import { LOGIN, DECODER, CLEAN_TOKEN } from "../actions/type";

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

    case CLEAN_TOKEN:
      return { ...state, token: action.cleanToken, user: action.cleanUser };

    default:
      return state;
  }
};

export default access;
