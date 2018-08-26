import {GET_USERS, SET_ERROR} from "../helpers/constants";

export const usersAction = users => {
    return{
        type: GET_USERS,
        payload: users
    }
}

export const errorAction = error => {
    return{
        type: SET_ERROR,
        payload: error
    }
}


