import {API_URL} from "../constants/constants.ts";
import requestFetch, {MethodsEnum} from "../utils/requestFetch.ts";

export const getPosts = async (limit?: number, offset?: number) =>
    requestFetch({
        url:`${API_URL}/blog/posts/${limit && "?limit=" + limit}${offset && "offset=" + offset}`,
        method: MethodsEnum.get
    })

export const getPost = async (postId: number) =>
    requestFetch({
        url:`${API_URL}/blog/posts/${postId}`,
        method: MethodsEnum.get
    })