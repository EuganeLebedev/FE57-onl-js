import {MainPosts, PagePosts, PagePostsWrapper, PostsContainer, PostsHistory} from "./styles.ts";
import { useState} from "react";
import { Post } from "../components/Post/Post.tsx"
import {PostTypesEnum, PostWithUserType} from "../utils/globalTypes.ts";
import {getPosts, getUsers, attachUsersToPost} from "./services.tsx";
// import useQueryExtended from "../hooks/useQueryExtended";
import {useDidUpdate} from "../hooks/useDidUpdate.tsx";

export const Posts = () => {

    const [posts, setPosts] = useState<PostWithUserType[]>([]);
    // const {data:dataUsers , getData:fetchUsers, isLoading:isLoadingUsers, }  = useQueryExtended(getUsers)

    useDidUpdate(() => {
        const getData = async  () => {
            const postsData = await getPosts()
            const usersData = await getUsers()

            // @ts-ignore
            setPosts(attachUsersToPost(postsData, usersData))
        }
        getData()
    }, []);
    let mainPost =  posts.slice(0, 1)
    let pagePosts =  posts.slice(1, 10)
    let additionalPosts =  posts.slice(11)

    return (
        <PostsContainer>
            <PagePostsWrapper>
                <MainPosts>
                    {mainPost.map((el) => {
                        return <Post postSize={PostTypesEnum.large} post={el}/>
                    })}
                </MainPosts>
                <PagePosts>
                    {pagePosts.map((el) => {
                        return <Post postSize={PostTypesEnum.middle} post={el}/>
                    })}
                </PagePosts>
            </PagePostsWrapper>
            <PostsHistory>
                {additionalPosts.map((el) => {
                    return <Post postSize={PostTypesEnum.small} post={el}/>
                })}
            </PostsHistory>
        </PostsContainer>
    );
}
