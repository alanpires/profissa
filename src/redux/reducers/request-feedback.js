import { FEEDBACKS } from "../actions/type";

const defaultState = {
  feedbacksRequest: [],
};

const profissaFeedbacks = (state = defaultState, action) => {
  switch (action.type) {
    case FEEDBACKS:
      return { ...state, feedbacksRequest: action.feedback };
    default:
      return state;
  }
};

export default profissaFeedbacks;
