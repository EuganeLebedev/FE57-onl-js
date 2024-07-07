import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../../../services/services.ts";


type fetchPostsArgsType = {limit?: number, offset?: number}

export const fetchPosts =
    createAsyncThunk('slice/posts',
        async (args: fetchPostsArgsType) => {
            const {limit, offset} = args
            const data = await getPosts(limit, offset)
            return data
        }
    )
