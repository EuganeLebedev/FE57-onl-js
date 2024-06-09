import styled from "styled-components";


export const PostLink = styled.a<{isDark: boolean}>`
    text-decoration: none;
    color: ${p => (p.isDark ? "white" : "#213547")};

    &:hover {
        color: ${p => (p.isDark ? "white" : "#213547")};
    }
`;

