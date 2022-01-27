import { authActions } from "../constants"

const initialState = {
    loading: false,
    data: "",
    error: "",
    invalidEmail: ""
}

export const forgotPassword = (state = initialState, action) => {
    switch (action.type) {
        case authActions.FORGOT_PASSWORD:
            return {
                ...state,
                loading: true,
                data: "",
                error: "",
                invalidEmail: "",
            }
        case authActions.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
                invalidEmail: "",
            }
        case authActions.FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                loading: false,
                data: "",
                error: action.payload,
                invalidEmail: ""
            }
        case authActions.FORGOT_PASSWORD_INVALID_EMAIL_ERROR:
            return {
                ...state,
                loading: false,
                data: "",
                error: "",
                invalidEmail: action.payload
            }
        case authActions.CLEAR_FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                invalidEmail: "",
                error: ""
            }
        case authActions.CLEAR_FORGOT_PASSWORD_STATE:
            return {
                ...state,
                loading: false,
                data: "",
                error: "",
                invalidEmail: "",
            }
        default:
            return state
    }
}