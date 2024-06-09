import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDidUpdate} from "../hooks/useDidUpdate.tsx";
import {attachUsersToPost, getPost, getUser} from "./services.tsx";
import {useState} from "react";
import {PostWithUserType} from "../utils/globalTypes.ts";
import {PostContainer, PostContent} from "./styles.ts";

export const Post = () => {
    const [post, setPost] = useState<PostWithUserType | undefined>(undefined);
    const navigate = useNavigate()
    const {postID} = useParams()

    if (!postID) {
        return <Navigate to={'*'}/>
    }

    useDidUpdate(() => {
        const getData = async  () => {
            const postData = await getPost(Number(postID))
            const userData = await getUser(Number(postData.userId))

            // @ts-ignore
            const result = (attachUsersToPost(new Array(postData), new Array(userData)))

            return setPost(result[0])
        }
        getData()
    }, []);


    if (!post) {
        return <></>
    }

    return (<PostContainer>
        <h2>{post.title}</h2>
        <img style={{maxWidth: "1000px", margin: "15px"}} src={post.image}/>
        <PostContent>{post.content}</PostContent>
        <p style={{marginBottom: "15px"}}>{post.publishedAt}</p>
        <div style={{display: "flex", alignItems: "flex-start", width: "100%"}}>
            <button title={'go back'} onClick={() => navigate(-1)}>Go back</button>
        </div>


    </PostContainer>)
}