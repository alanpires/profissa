import { LOGIN, DECODER, CLEAN_TOKEN, CHANGE_USER_DATA } from "../actions/type";

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

    case CHANGE_USER_DATA:
      return { ...state, user: { ...state.user, ...action.userData } };

    default:
      return state;
  }
};

export default access;
