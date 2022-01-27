import { clientActionTypes } from "../constants"

export const getAllClients = () => {
    return {
        type: clientActionTypes.GET_ALL_CLIENTS,
    }
}

export const getAllClientsSuccess = (data) => {
    return {
        type: clientActionTypes.GET_ALL_CLIENTS_SUCCESS,
        payload: data
    }
}

export const getAllClientsError = (error) => {
    return {
        type: clientActionTypes.GET_ALL_CLIENTS_ERROR,
        payload: error
    }
}
export const getClientDetails = (data) => {
    return {
        type: clientActionTypes.GET_CLIENT_DETAILS,
        payload: data
    }
}

export const createClient = (data) => {
    return {
        type: clientActionTypes.CREATE_CLIENT,
        payload: data
    }
}

export const clearClientDetails = () => {
    return {
        type: clientActionTypes.CLEAR_CLIENT_DETAILS
    }
}