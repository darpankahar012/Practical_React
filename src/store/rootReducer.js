import { combineReducers } from "redux";
import {
  login,
  client,
  forgotPassword,
} from "./reducers";


const appReducer = combineReducers({
  client: client,
  login: login,
  forgotPassword: forgotPassword,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
