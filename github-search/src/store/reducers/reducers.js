const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload}
        case 'SET_ERROR':
            console.log({...state, error: action.payload})
            return {...state, error: action.payload}
        default:
            return state
    }
}


export default userReducer