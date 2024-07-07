import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDidUpdate} from "../hooks/useDidUpdate.tsx";
import {PostContainer, PostContent} from "./styles.ts";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {fetchPost} from "../redux/reducers/SinglePostReducer/thunkActions.ts";

export const Post = () => {
    const navigate = useNavigate()
    const {postID} = useParams()

    if (!postID) {
        return <Navigate to={'*'}/>
    }

    const dispatch = useAppDispatch()
    const {post} = useAppSelector(state => state.singlePostReSliceReducer)

    useDidUpdate(() => {
        dispatch(fetchPost(Number(postID)))
    }, []);


    if (!post) {
        return <></>
    }

    return (<PostContainer>
        <h2>{post.title}</h2>
        <img style={{maxWidth: "1000px", margin: "15px"}} src={post.image}/>
        <PostContent>{post.description}</PostContent>
        <p style={{marginBottom: "15px"}}>{post.date}</p>
        <div style={{display: "flex", alignItems: "flex-start", width: "100%"}}>
            <button title={'go back'} onClick={() => navigate(-1)}>Go back</button>
        </div>


    </PostContainer>)
}