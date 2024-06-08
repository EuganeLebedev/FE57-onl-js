import styled from "styled-components";
import {PostTypesEnum} from "../../utils/globalTypes.ts";


export const PostWrapper = styled.div<{postSize: PostTypesEnum}>`
    background-color: ${p => (
        p.postSize ===  PostTypesEnum.small? "red" : 
                p.postSize ===  PostTypesEnum.middle? "green" :
                        "white")
    };
    color: ${p => (p.isDark ? "white" : "black")};
`;
