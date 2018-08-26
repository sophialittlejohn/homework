import axios from 'axios'
import {errorAction, usersAction} from "../actions/actions";
import {token} from './token'

// your github access token goes here
// generate your access token here: https://github.com/settings/tokens
// const token = ''

const instance = axios.create({
    baseURL: 'https://api.github.com/search/',
    timeout: 2000,
    headers: {'Authorization': `Bearer ${token}`}
});

export const fetchUsers = searchString => dispatch => {
    return instance.get(`users?q=${searchString}`)
        .then((response) => {
            const users = response.data.items
            if (users.length > 0) {
                dispatch(usersAction(users))
            }
            else {
                dispatch(usersAction([{login: 'User not found', key:1}]))
            }
        })
        .catch((error) => {
            dispatch(errorAction(error))
        });
}