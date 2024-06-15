import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postImageReducer from "./reducers/postImageReducer.tsx";

const combineReducer = combineReducers({
    postImageReducer
})

export const store = configureStore({
    reducer: combineReducer
})