import {PostThumbnail, PostThumbnailWrapper} from "../styles.ts";
import {useDispatch} from "react-redux";
import {setSelectedPost} from "../../../redux/reducers/postImageReducer.tsx";
import {PostType, PostWithUserType} from "../../../utils/globalTypes.ts";

interface Props {
    post: PostType,
    isSmall?: boolean,
}

export const Thumbnail = (props: Props) => {

    const {post, isSmall} = props
    const dispatch = useDispatch()

    const handleClickThumbnail = () => {
        dispatch(setSelectedPost(post))
    }

    return (
        <PostThumbnailWrapper onClick={handleClickThumbnail}>
            <PostThumbnail src={post.image} isSmall={isSmall} loading={"lazy"}/>
        </PostThumbnailWrapper>
    );
}

export default Thumbnail;
