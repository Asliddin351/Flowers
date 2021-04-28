import {createStore, combineReducers, applyMiddleware} from 'redux'
import {userReducer} from './userReducer'
import {countReducer} from './countReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users: userReducer,
    count: countReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


