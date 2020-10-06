import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";
import ProfissaHomepage from "./profissas-homepage";

export default combineReducers({ access, messagesLogin, ProfissaHomepage });
