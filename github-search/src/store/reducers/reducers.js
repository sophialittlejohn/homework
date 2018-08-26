import {GET_USERS, SET_ERROR} from "../helpers/constants";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}


export default userReducer