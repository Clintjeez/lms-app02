import { combineReducers } from "redux";
import { authReducer } from "./auth";
import message from "./message";

const rootReducer = combineReducers({
  auth: authReducer,
  message,
});

export default rootReducer;
