import "./styles.ts"
import {PostLink} from "./styles.ts";

interface Props {
    title: string,
    postID: number,
    isDark: boolean,
    isLarge?: boolean
}

export const Title = (props: Props) => {

    const { title, postID, isDark, isLarge } = props
    return (
        <PostLink href={`post/${postID}`} isDark={isDark}>
            {isLarge ? <h2>{title}</h2> : <h4>{title}</h4>}
        </PostLink>
    );
}

export default Title;
