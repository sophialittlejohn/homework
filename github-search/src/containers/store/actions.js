export const usersAction = users => {
    return{
        type: 'GET_USERS',
        payload: users
    }
}

export const errorAction = error => {
    return{
        type: 'SET_ERROR',
        payload: error
    }
}


