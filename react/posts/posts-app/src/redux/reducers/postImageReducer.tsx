import { createSlice} from "@reduxjs/toolkit";
import {PostWithUserType} from "../../utils/globalTypes.ts";

type initialStateType = {
    selectedPost: PostWithUserType | null
}


const initialState: initialStateType = {
    selectedPost: null
}


const postImageReucer = createSlice({
    name: "postImageReucer",
    initialState: initialState,
    reducers: {
        setSelectedPost: (state,action) => {
            state.selectedPost = action.payload
        }
    }
})

export const {setSelectedPost} = postImageReucer.actions

export default postImageReucer.reducer
