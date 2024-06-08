import {PostTypesEnum} from "../../../utils/globalTypes.ts";

interface Props {
    postSize: PostTypesEnum,
    content: string,
}

export const Content = (props: Props) => {

    const { postSize, content } = props
    return (
        <p className={postSize ===PostTypesEnum.small? 'text-sm': postSize ===PostTypesEnum.middle? 'text-md': 'text-lg'}> { content }</p>
    );
}

export default Content;
