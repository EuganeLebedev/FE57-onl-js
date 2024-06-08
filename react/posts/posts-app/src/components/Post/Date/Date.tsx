import {PostTypesEnum} from "../../../utils/globalTypes.ts";

interface Props {
    postSize: PostTypesEnum,
    date: string,
}

export const PostDate = (props: Props) => {

    const { postSize, date } = props
    return (
        <p className={postSize ===PostTypesEnum.small? 'text-sm': postSize ===PostTypesEnum.middle? 'text-md': 'text-lg'}> { date }</p>
    );
}

export default PostDate;
