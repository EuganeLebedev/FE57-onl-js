import "./Post.scss"
import { PostDate } from "./Date/Date.tsx"
import { Title } from "./Title/Title.tsx"
import { Content } from "./Content/Content.tsx"
import {PostTypesEnum, PostWithUserType, ThemeEnum} from "../../utils/globalTypes.ts";
import {PostThumbnail, PostWrapperL, PostWrapperM, PostWrapperS} from "./styles.ts";
import {SwitchContent} from "../../utils/SwitchContent.tsx";
import {useContext} from "react";
import ThemedContext from "../../globalContexts/ThemedContext.tsx";


interface Props {
    postSize: PostTypesEnum,
    post: PostWithUserType,
}

interface PostProps {
    post: PostWithUserType,
}


// interface Props {
//     id: number,
//     image: string,
//     text: string,
//     date: string,
//     lesson_num: number,
//     title: string,
//     author: number,
//
// }

export const PostSmall = (props: PostProps) => {
    const {theme} = useContext(ThemedContext)
    const { post} = props
    return (
        <PostWrapperS isDark={theme == ThemeEnum.dark}>
            <div>
                <PostDate date={post.publishedAt}/>
                <Title title={post.title} postID={post.id} isDark={theme == ThemeEnum.dark}/>
            </div>
            <div>
                <PostThumbnail src={post.thumbnail} loading={"lazy"} isSmall/>
            </div>
        </PostWrapperS>
    )
}

export const PostMiddle = (props: PostProps) => {
    const {theme} = useContext(ThemedContext)
    const { post} = props
    return (
        <PostWrapperM isDark={theme == ThemeEnum.dark}>
            <div>
                <PostThumbnail src={post.thumbnail} loading={"lazy"}/>
            </div>
            <div>
                <PostDate date={post.publishedAt}/>
                <Title title={post.title} postID={post.id} isDark={theme == ThemeEnum.dark}/>
            </div>
        </PostWrapperM>
    )
}

export const PostLarge = (props: PostProps) => {
    const {theme} = useContext(ThemedContext)
    const { post} = props
    return (
        <PostWrapperL isDark={ theme == ThemeEnum.dark}>
            <div>
                <PostDate date={post.publishedAt}/>
                <Title title={post.title} postID={post.id} isDark={ theme == ThemeEnum.dark} isLarge/>
                <Content content={post.content}/>
            </div>
            <div>
                <PostThumbnail src={post.thumbnail} loading={"lazy"}/>
            </div>

        </PostWrapperL>
    )
}

export const Post = (props: Props) => {


    const { postSize, post } = props

    return (
        <SwitchContent value={postSize}>
            <PostSmall post={post} data-value={PostTypesEnum.small} />
            <PostMiddle post={post} data-value={PostTypesEnum.middle} />
            <PostLarge post={post} data-value={PostTypesEnum.large}/>
        </SwitchContent>
    );
}

export default Post;
