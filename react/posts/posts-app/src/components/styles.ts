import styled from "styled-components";


export const HeaderWrapper = styled.div<{isDark: boolean}>`
    display: flex;
    gap: 8px;
    padding: 8px;
    background-color: ${p => (p.isDark ? "#282c34" : "#646cff")};
`;