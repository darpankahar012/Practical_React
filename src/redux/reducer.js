import { REHYDRATE } from "redux-persist";

let initState = {
  userData: {},
  token: "",
};

function taskReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN_USER_DETAIL":
      return {
        ...state,
        userData: action.res,
      };
    case "TOKEN_KEY":
      return {
        ...state,
        token: action.res,
      };

    case REHYDRATE:
      return {
        ...state,
        userData:
          action.payload && action.payload.userData ? action.payload.userData : {},
        token:
          action.payload && action.payload.token ? action.payload.token : ""
      };
    default:
      return {
        ...state,
      };
  }
}

export const reducer = taskReducer;
