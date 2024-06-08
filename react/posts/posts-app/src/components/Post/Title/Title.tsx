import {PostTypesEnum} from "../../../utils/globalTypes.ts";


interface Props {
    postSize: PostTypesEnum,
    title: string,
    postID: number,
}

export const Title = (props: Props) => {

    const { postSize, title, postID } = props
    return (
        <a href={`post/${postID}`}><h2 className={postSize ===PostTypesEnum.small? 'text-sm': postSize ===PostTypesEnum.middle? 'text-md': 'text-lg'}> { title }</h2></a>
    );
}

export default Title;
