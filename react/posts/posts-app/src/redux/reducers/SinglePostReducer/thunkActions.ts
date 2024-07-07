import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPost} from "../../../services/services.ts";

export const fetchPost =
    createAsyncThunk('slice/post',
        async (postId: number) => {
            const data = await getPost(postId)
            return data
        }
    )
