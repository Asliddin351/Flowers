import {combineReducers, configureStore} from '@reduxjs/toolkit'
import toolkidSlice from './toolkidSlice'

const rootReducer = combineReducers({
    toolkid: toolkidSlice
})


export const store = configureStore({
    reducer: rootReducer
})