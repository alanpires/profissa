import { PROFISSAS } from "../actions/type";
import { filterProfissa } from "../reducers/helper";

const defaultState = {
  profissasRequest: [],
};

const profissaHomepage = (state = defaultState, action) => {
  switch (action.type) {
    case PROFISSAS:
      return { ...state, profissasRequest: filterProfissa(action.profissa) };
    default:
      return state;
  }
};

export default profissaHomepage;
