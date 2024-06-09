import {PostTypesEnum} from "../../../utils/globalTypes.ts";

interface Props {
    date: string,
}

export const PostDate = (props: Props) => {

    const { date } = props
    return (
        <p> { date }</p>
    );
}

export default PostDate;
