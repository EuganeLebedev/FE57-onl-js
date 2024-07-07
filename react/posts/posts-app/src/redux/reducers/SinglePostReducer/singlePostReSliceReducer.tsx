import {createSlice} from "@reduxjs/toolkit";
import {fetchPost} from "./thunkActions.ts";
import {PostType} from "../../../utils/globalTypes.ts";

type initialStateType = {
    post: PostType | undefined
}


const initialState: initialStateType = {
    post: undefined
}

const singlePostReSliceReducer = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.post = action.payload
        })
    }
})

export default singlePostReSliceReducer.reducer