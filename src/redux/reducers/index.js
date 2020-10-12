import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";
import profissaHomepage from "./profissas-homepage";
import schedules from "./schedules";
import profissaFeedbacks from "./request-feedback";
import services from "./service-request";

export default combineReducers({
  access,
  messagesLogin,
  profissaHomepage,
  schedules,
  profissaFeedbacks,
  services,
});
