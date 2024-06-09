import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import Home from "../modules/home/Home.tsx";
import NotFound404 from "../utils/NotFound404.tsx";
// import Catalog from "../modules/catalog";
import PageWrapper from "./PageWrapper.tsx";
import {Posts} from "../modules/Posts.tsx";
import {Post} from "../modules/Post.tsx"
// import {useThemeContext} from "../globalContexts/ThemedContext.tsx";
// import {ThemeEnum} from "../utils/globalTypes.ts";
// import PrivatePage from "./PrivatePage.tsx";
// import {useMemo} from "react";
// import {renderPrivateRoutes} from "./privetRoutesGroups.tsx";

// const HomePage = () => <PageWrapper Component={Home}/>
const PostsPage =() => <PageWrapper Component={() => <Posts/>}/>
const PostPage =() => <PageWrapper Component={() => <Post/>}/>

const RouterComponent = () => {
    // const {theme} = useThemeContext()


    // const isEnabledDarkTheme = useMemo(() => theme ===ThemeEnum.dark, [theme])



    return <BrowserRouter>
        <Routes>
            {/*<Route path={'home'} Component={HomePage}/>*/}
            <Route path={'posts'} Component={PostsPage}/>
            <Route path={'post/:postID'} Component={PostPage}/>
            <Route path={''} Component={() => <Navigate to={'/posts'}/>}/>
            <Route path='*' Component={NotFound404}/>
            <Route path={'login'} Component={() => <Navigate to={'/posts'}/>}/>
        </Routes>
    </BrowserRouter>
}

export default RouterComponent