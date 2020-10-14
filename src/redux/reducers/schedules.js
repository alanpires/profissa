import { SCHEDULES } from "../actions/type";

const defaultState = [];

const schedules = (state = defaultState, action) => {
  switch (action.type) {
    case SCHEDULES:
      return [...state, action.schedules];

    default:
      return state;
  }
};

export default schedules;
