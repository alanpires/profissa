import { FEEDBACKS } from "../actions/type";

const defaultState = {
  feedbacksRequest: [],
};

const ProfissaFeedbacks = (state = defaultState, action) => {
  switch (action.type) {
    case FEEDBACKS:
      return { ...state, feedbacksRequest: action.feedback };
    default:
      return state;
  }
};

export default ProfissaFeedbacks;
