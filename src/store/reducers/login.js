import { authActions } from "../constants"

const initialState = {
    loading: false,
    error: "",
    data: "",
    invalidCredential: ""
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGIN:
            return {
                ...state,
                loading: true,
                data: "",
                error: "",
                invalidCredential: ""
            }
        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
                invalidCredential: ""
            }
        case authActions.LOGIN_INVALID:
            return {
                ...state,
                loading: false,
                data: "",
                error: "",
                invalidCredential: action.payload
            }
        case authActions.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                data: "",
                error: action.payload
            }
        case authActions.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: "",
                invalidCredential: "",
            }
        case authActions.LOGOUT_SUCCESS:
            return {
                ...state,
                error: "",
                data: "",
                invalidCredential: ""
            }
        default:
            return state
    }
}