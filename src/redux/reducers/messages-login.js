import { LOGIN_ERROR } from "../actions/type";

const defaultState = {
  errorRequest: "",
};

const messagesLogin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { errorRequest: action.error };

    default:
      return state;
  }
};

export default messagesLogin;
