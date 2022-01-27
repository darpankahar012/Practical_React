import { authActions } from "../constants"

export const login = () => {
    return {
        type: authActions.LOGIN
    }
}

export const loginSuccess = (data) => {
    return {
        type: authActions.LOGIN_SUCCESS,
        payload: data
    }
}

export const loginInvalid = (data) => {
    return {
        type:authActions.LOGIN_INVALID,
        payload: data
    }
}

export const loginError = (error) => {
    return {
        type: authActions.LOGIN_ERROR,
        payload: error
    }
}

export const clearLoginError = () => {
    return {
        type: authActions.CLEAR_LOGIN_ERROR
    }
}

export const logoutSuccess = () => {
    return {
        type:authActions.LOGOUT_SUCCESS,
    }
}