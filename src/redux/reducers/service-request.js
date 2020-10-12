import { SERVICE_RESQUEST } from "../actions/type";

const defaultState = {
  services: [],
};

const Services = (state = defaultState, action) => {
  switch (action.type) {
    case SERVICE_RESQUEST:
      return { ...state, services: action.serviceRequest };

    default:
      return state;
  }
};

export default Services;
