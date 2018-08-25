import axios from 'axios'
import {errorAction, usersAction} from "./actions";

const token = 'bc4006dd04fb326d425cb3750cc2d284ea893091'

const instance = axios.create({
    baseURL: 'https://api.github.com/search/',
    timeout: 2000,
    headers: {'Authorization': `Bearer ${token}`}
});

export const fetchUsers = searchString => dispatch => {
    return instance.get(`users?q=${searchString}`)
        .then((response) => {
            const users = response.data.items
            dispatch(usersAction(users))
        })
        .catch((error) => {
            dispatch(errorAction(error))
            console.log(error);
        });
}