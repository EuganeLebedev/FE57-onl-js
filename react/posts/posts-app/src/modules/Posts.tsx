import {MainPosts, PagePosts, PagePostsWrapper, PostsContainer, PostsHistory} from "./styles.ts";
import { Post } from "../components/Post/Post.tsx"
import {PostType, PostTypesEnum} from "../utils/globalTypes.ts";import {useDidUpdate} from "../hooks/useDidUpdate.tsx";
import {PostImageModal} from "./PostImageModal.tsx";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {fetchPosts} from "../redux/reducers/PostsReducer/thunkActions.ts";
import {useEffect} from "react";

export const Posts = () => {

    // const [posts, setPosts] = useState<PostWithUserType[]>([]);
    const {count, results, next, previous} = useAppSelector(state => state.postsSliceReducer)
    const dispatch = useAppDispatch()
    // const {data:dataUsers , getData:fetchUsers, isLoading:isLoadingUsers, }  = useQueryExtended(getUsers)
    const {selectedPost} = useAppSelector(state => state.postImageReducer)
    useDidUpdate(() => {
        dispatch(fetchPosts({limit: 100, offset: 0}))
    }, []);

    let mainPost = results.slice(0, 1)
    let pagePosts = results.slice(1, 40)
    let additionalPosts = results.slice(41)

    useEffect(() => {
        if (results.length === 0) return
        mainPost = results.slice(0, 1)
        pagePosts = results.slice(1, 10)
        additionalPosts = results.slice(11)
    }, [results]);

    return (
        <PostsContainer isFixed={!!selectedPost}>
            <PagePostsWrapper>
                <MainPosts>
                    {mainPost.map((el: PostType) => {
                        return <Post postSize={PostTypesEnum.large} post={el}/>
                    })}
                </MainPosts>
                <PagePosts>
                    {pagePosts.map((el: PostType) => {
                        return <Post postSize={PostTypesEnum.middle} post={el}/>
                    })}
                </PagePosts>
            </PagePostsWrapper>
            <PostsHistory>
                {additionalPosts.map((el: PostType) => {
                    return <Post postSize={PostTypesEnum.small} post={el}/>
                })}
            </PostsHistory>
            <PostImageModal/>
        </PostsContainer>
    );
}
