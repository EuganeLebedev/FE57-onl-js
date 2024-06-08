import {PostContainer} from "./styles.ts";
import {useContext, useState} from "react";
import {ThemeEnum} from "../utils/globalTypes.ts";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import { Post } from "../components/Post/Post.tsx"
import {PostTypesEnum} from "../utils/globalTypes.ts";
import {getPosts, getUsers, attachUsersToPost} from "./services.tsx";
// import useQueryExtended from "../hooks/useQueryExtended";
import {useDidUpdate} from "../hooks/useDidUpdate.tsx";

export const Posts = () => {

    const {theme}= useContext(ThemedContext)

    const [posts, setPosts] = useState<PostTypesEnum[]>([]);
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

    // console.log(posts)
    return (
        <PostContainer isDark={theme === ThemeEnum.dark}>
            <h2>Posts page </h2>
            {mainPost.map((el) => {
                return <Post postSize={PostTypesEnum.large} post={el}/>
            })}
            {pagePosts.map((el) => {
                return <Post postSize={PostTypesEnum.middle} post={el}/>
            })}
            {additionalPosts.map((el) => {
                return <Post postSize={PostTypesEnum.small} post={el}/>
            })}
        </PostContainer>
    );
}
