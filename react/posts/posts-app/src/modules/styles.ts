import styled from "styled-components";


export const PostsContainer = styled.div<{isFixed?: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 0 15px;
    ${p => (p.isFixed && "position: fixed")};;
    
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1000px;
`;

export const PostContent = styled.p`
    //color: grey;
`;

export const MainPosts = styled.div`
    max-width: 750px;
`;

export const PagePosts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 780px;
`;

export const PostsHistory = styled.div`
`;

export const PagePostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
`;

export const PostPopupContainer = styled.div`
    position: fixed;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
`;

export const PostPopupWrapper = styled.div<{isDark: boolean}>`
    position: relative;
    padding: 50px;
    background-color: ${p => (p.isDark ? "black" : "white")};;
    max-width: 500px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
    }
`;