import { INFOS_PROFISSA } from "../actions/type";

const defaultState = {};

const infosProfissa = (state = defaultState, action) => {
  switch (action.type) {
    case INFOS_PROFISSA:
      return action.infosProfissa;

    default:
      return state;
  }
};

export default infosProfissa;
