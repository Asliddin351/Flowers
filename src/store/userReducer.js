
const initialState = {
    users: []
}

const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'
const ADD_MANY_USERS = 'ADD_MANY_USERS'

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MANY_USERS:
            return  {...state, users: [...state.users, ...action.payload]}
        case ADD_USER: 
            return {...state, users: [...state.users, action.payload]}
        case DELETE_USER:
            return {...state, users: state.users.filter(user=> user.id !== action.payload)}

        default:
            return state;
    }
}

export const addUserAction = (payload) => ({type: ADD_USER, payload});
export const addManyUsersAction = (payload) => ({type: ADD_MANY_USERS, payload});
export const deleteUserAction = (payload) => ({type: DELETE_USER, payload});
