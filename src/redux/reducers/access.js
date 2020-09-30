import { LOGIN } from "../actions/type";

const defaultState = {
  token: localStorage.getItem("token") || "",
  //   user: JSON.parse(localStorage.getItem("user")) || {},
};

const access = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token };

    default:
      return state;
  }
};

export default access;
