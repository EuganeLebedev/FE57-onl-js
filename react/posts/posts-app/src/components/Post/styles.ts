import styled from "styled-components";

export const PostThumbnail = styled.img<{isSmall?: boolean}>`
    ${p => (p.isSmall && 
                    "max-width: 100px;"
    )};
    
`;

export const PostWrapperL = styled.div<{isDark: boolean}>`
    color: ${p => (p.isDark ? "white" : "#213547")};
    padding: 15px;
    //max-width: 800px;
    display: flex;
`;

export const PostWrapperM = styled.div<{isDark: boolean}>`
    color: ${p => (p.isDark ? "white" : "#213547")};
    padding: 15px;
    max-width: 260px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
    margin-left: -1px;
`;

export const PostWrapperS = styled.div<{isDark: boolean}>`
    color: ${p => (p.isDark ? "white" : "#213547")};
    padding: 15px;
    max-width: 400px;
    display: flex;
`;



