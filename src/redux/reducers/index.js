import { combineReducers } from "redux";
import access from "./access";
import messagesLogin from "./messages-login";

export default combineReducers({ access, messagesLogin });
