import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";
import ProfissaHomepage from "./profissas-homepage";
import schedules from "./schedules";
import ProfissaFeedbacks from "./request-feedback";
import Services from "./service-request";

export default combineReducers({
  access,
  messagesLogin,
  ProfissaHomepage,
  schedules,
  ProfissaFeedbacks,
  Services,
});
