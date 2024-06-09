import {PostContent} from "./styles.ts";

interface Props {
    content: string,
}

export const Content = (props: Props) => {

    const { content } = props
    return (
        <PostContent>{ content }</PostContent>
    );
}

export default Content;
