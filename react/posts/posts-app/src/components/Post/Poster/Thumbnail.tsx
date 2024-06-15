import {PostThumbnail} from "../styles.ts";
import {useDispatch} from "react-redux";
import {setSelectedPost} from "../../../redux/reducers/postImageReducer.tsx";
import {PostWithUserType} from "../../../utils/globalTypes.ts";

interface Props {
    post: PostWithUserType,
    isSmall?: boolean,
}

export const Thumbnail = (props: Props) => {

    const {post, isSmall} = props
    const dispatch = useDispatch()

    const handleClickThumbnail = () => {
        dispatch(setSelectedPost(post))
    }

    return (
        <div onClick={handleClickThumbnail}>
            <PostThumbnail src={post.thumbnail} isSmall={isSmall} loading={"lazy"}/>
        </div>
    );
}

export default Thumbnail;
