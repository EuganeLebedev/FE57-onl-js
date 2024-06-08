import "./Post.scss"
import { PostDate } from "./Date/Date.tsx"
import { Title } from "./Title/Title.tsx"
import { Content } from "./Content/Content.tsx"
import {PostTypesEnum, PostWithUserType} from "../../utils/globalTypes.ts";
import {PostWrapper} from "./styles.ts";


interface Props {
    postSize: PostTypesEnum,
    post: PostWithUserType
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

export const Post = (props: Props) => {


    const { postSize, post } = props

    return (
        <PostWrapper key={`post_${post.id}`} postSize={postSize}>
            <div className={postSize}>
                <PostDate postSize={postSize} date={post.date.toDateString()}/>
                <Title postSize={postSize} title={post.title} postID={post.id}/>
                <Content postSize={postSize} content={post.body}/>
            </div>
        </PostWrapper>
    );
}

export default Post;
