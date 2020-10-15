import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";
import profissaHomepage from "./profissas-homepage";
import schedules from "./schedules";
import profissaFeedbacks from "./request-feedback";
import services from "./service-request";
import infosProfissa from "./infos-profissa";
import users from './users'

export default combineReducers({
  access,
  messagesLogin,
  profissaHomepage,
  schedules,
  profissaFeedbacks,
  services,
  infosProfissa,
  users
});
