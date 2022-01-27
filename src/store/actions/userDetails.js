import { authActions } from "../constants/authActionTypes";

export const getUserDetails = (data) => {
  return {
    type: authActions.GET_USER_DETAILS,
  };
};

export const userDetails = (data) => {
  return {
    type: authActions.USER_DETAILS,
    payload: data,
  };
};

export const userDetailsError = (error) => {
  return {
    type: authActions.USER_DETAILS_ERROR,
    payload: error,
  };
};

export const userDetailsInvalid = (error) => {
  return {
    type: authActions.USER_DETAILS_INVALID,
    payload: error,
  };
};







export const userUpdate = () => {
  return {
    type: authActions.USER_UPDATE,
  };
};

export const userUpdateSuccess = (data) => {
  return {
    type: authActions.USER_UPDATE_SUCCESS,
    payload: data,
  };
};

export const userUpdateError = (error) => {
  return {
    type: authActions.USER_UPDATE_ERROR,
    payload: error,
  };
};

export const createRegisterUser = () => {
  return {
    type: authActions.CREATE_REGISTER_USER,
  };
};

export const createRegisterUserSuccess = (data) => {
  return {
    type: authActions.CREATE_REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const createRegisterUserError = (error) => {
  return {
    type: authActions.CREATE_REGISTER_USER_ERROR,
    payload: error,
  };
};

export const userUpdateInvalid = (error) => {
  return {
    type: authActions.USER_UPDATE_INVALID,
    payload: error,
  };
};

export const clearuserUpdateError = () => {
  return {
    type: authActions.CLEAR_USER_UPDATE_ERROR,
  };
};

export const clearRegisterUser = () => {
  return {
    type: authActions.CLEAR_REGISTER_USER,
  };
};
