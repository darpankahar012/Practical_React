import axios from "axios";
import {
  login,
  loginError,
  loginInvalid,
  loginSuccess,
  getUserDetails,
  userDetails,
  userDetailsInvalid,
  userDetailsError,
  setApiError,
} from "../store/actions";

export class AuthenticationService {
  static Login = (data) => {
    return (dispatch) => {
      dispatch(login());
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/login`,
          data)
        .then((response) => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user_role");
          localStorage.removeItem("expires_In");
          localStorage.removeItem("refresh_Token");
          if (response.data.acknowledge === 1) {
            localStorage.setItem("access_token", response.data.access_Token);
            localStorage.setItem("user_role", response.data.roleId);
            localStorage.setItem("expires_In", response.data.expires_In);
            localStorage.setItem("refresh_Token", response.data.refresh_Token);
            dispatch(loginSuccess(response.data));
          } else {
            dispatch(loginInvalid(response.data.message));
          }
        })
        .catch((error) => {
          localStorage.clear();
          dispatch(loginError("Login error"));
        });
    };
  };



  static GetUserDetails = () => {
    return (dispatch) => {
      dispatch(getUserDetails());
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/account/profile`, {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          if (response.data.acknowledge === 1) {
            dispatch(userDetails(response.data));
          } else {
            dispatch(userDetailsInvalid(response.data.message));
          }
        })
        .catch((error) => {
          dispatch(userDetailsError(error));
        });
    };
  };
}
