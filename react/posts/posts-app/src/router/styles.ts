import styled from "styled-components";


export const ContentContainer = styled.div<{isDark?: boolean}>`
    margin: 0 auto;
    padding: 0 15px;
    color: ${p => (p.isDark ? "white" : "black")};;
    background-color: ${p => (p.isDark ? "#213547" : "white")};
`;