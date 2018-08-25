import axios from 'axios'
import {usersAction} from "./actions";

const token = '**************************************'

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 2000,
    headers: {'Authorization': `Bearer ${token}`}
});

export const fetchUsers = searchString => dispatch => {
    return instance.get(`https://api.github.com/search/users?q=${searchString}`)
        .then(function (response) {
            const users = response.data.items
            dispatch(usersAction(users))
        })
        .catch(function (error) {
            console.log(error);
        });
}