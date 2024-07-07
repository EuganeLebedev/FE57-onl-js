import {createSlice} from "@reduxjs/toolkit";
import {fetchPosts} from "./thunkActions.ts";
import {PostType} from "../../../utils/globalTypes.ts";

type initialStateType = {
    count: number,
    next: string,
    previous: string,
    results: PostType[]
}

const initialState: initialStateType = {
    count: 0,
    next: "",
    previous: "",
    results: []
}

const postsSliceReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            // Object.apply(state, action.payload)
            state.results = action.payload.results
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
        })
    }
})

export default postsSliceReducer.reducer