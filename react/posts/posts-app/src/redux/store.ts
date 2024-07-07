import {combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import postImageReducer from "./reducers/postImageReducer.tsx";
import postsSliceReducer from "./reducers/PostsReducer/postsSliceReducer.tsx";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import singlePostReSliceReducer from "./reducers/SinglePostReducer/singlePostReSliceReducer.tsx";

const combineReducer = combineReducers({
    postImageReducer,
    postsSliceReducer,
    singlePostReSliceReducer,
})

export const store = configureStore({
    reducer: combineReducer
})

type DefaultActionType = {type:  string, payload: any }
export type ActionType<EnumOfTypes> = {type: EnumOfTypes | string, payload: any }
type AppStateType = ReturnType<typeof combineReducer>
type AppDispatchType = ThunkDispatch<AppStateType, null, DefaultActionType>


export  const useAppSelector:TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()