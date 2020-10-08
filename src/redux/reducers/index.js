import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";
import ProfissaHomepage from "./profissas-homepage";
import ProfissaFeedbacks from "./request-feedback";

export default combineReducers({
  access,
  messagesLogin,
  ProfissaHomepage,
  ProfissaFeedbacks,
});
