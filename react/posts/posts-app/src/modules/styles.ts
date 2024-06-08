import styled from "styled-components";


export const PostContainer = styled.div<{isDark: boolean}>`
    background-color: ${p => (p.isDark ? "black" : "white")};
    color: ${p => (p.isDark ? "white" : "black")};
`;
