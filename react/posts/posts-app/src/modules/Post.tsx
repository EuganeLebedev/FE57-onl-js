import {useNavigate, useParams} from "react-router-dom";
import {useDidUpdate} from "../hooks/useDidUpdate.tsx";
import {attachUsersToPost, getPost, getUser} from "./services.tsx";
import {useEffect, useState} from "react";
import {PostTypesEnum} from "../utils/globalTypes.ts";

export const Post = () => {
    const [post, setPost] = useState<PostTypesEnum | undefined>(undefined);
    const navigate = useNavigate()
    const {postID} = useParams()

    if (!postID) {
        return navigate("*")
    }

    useDidUpdate(() => {
        const getData = async  () => {
            const postData = await getPost(Number(postID))
            const userData = await getUser(postData.userId)

            // @ts-ignore
            const result = (attachUsersToPost(new Array(postData), new Array(userData)))
            return setPost(result[0])
        }
        getData()
    }, []);

    if (!post) {
        return navigate("*")
    }

    return (<>
        <h2>Post! {post.title}</h2>
        <button title={'go back'} onClick={() => navigate(-1)}/>

    </>)
}