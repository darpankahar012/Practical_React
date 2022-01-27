import { clientActionTypes } from "../constants"

const initialState = {
    loading: false,
    clientsList: [
        { client_id: '11424', client_name: 'BRIT High Street Und', client_type: 'Insurance', client_relationship_manager: 'John Doe', last_modified_date: "01/01/2020" },
        { client_id: '11425', client_name: 'Rado Lebar', client_type: 'Corporate', client_relationship_manager: 'Harry Want', last_modified_date: "01/01/2020" },
        { client_id: '11426', client_name: 'BRIT High Street Und', client_type: 'Corporate', client_relationship_manager: 'John Best', last_modified_date: "01/01/2020" },
        { client_id: '11425', client_name: 'Rado Lebar', client_type: 'Corporate', client_relationship_manager: 'Harry Want', last_modified_date: "01/01/2020" },
        { client_id: '11426', client_name: 'BRIT High Street Und', client_type: 'Corporate', client_relationship_manager: 'John Best', last_modified_date: "01/01/2020" },
        { client_id: '11425', client_name: 'Rado Lebar', client_type: 'Corporate', client_relationship_manager: 'Harry Want', last_modified_date: "01/01/2020" },
        { client_id: '11455', client_name: 'BRIT High Street Und', client_type: 'Corporate', client_relationship_manager: 'John Best', last_modified_date: "01/01/2020" },
    ],
    clientListError: "",
    clientDetails: []
}

export const client = (state = initialState, action) => {
    switch(action.type) {
        case clientActionTypes.GET_ALL_CLIENTS:
            return {
                ...state,
                loading: true
            }
        case clientActionTypes.GET_ALL_CLIENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                clientListError: ""
            }
        case clientActionTypes.GET_ALL_CLIENTS_ERROR:
            return {
                ...state,
                loading: false,
                clientListError: action.payload
            }
        default: 
            return state
    }
} 