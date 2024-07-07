import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound404 from "../utils/NotFound404.tsx";
import PageWrapper from "./PageWrapper.tsx";
import {Posts} from "../modules/Posts.tsx";
import {Post} from "../modules/Post.tsx"
import {SignInPage} from "../modules/SignIn.tsx";
import {SignUpPage} from "../modules/SignUp.tsx";

const PostsPage =() => <PageWrapper Component={() => <Posts/>}/>
const PostPage =() => <PageWrapper Component={() => <Post/>}/>
const SignInWrappedPage =() => <PageWrapper Component={() => <SignInPage/>}/>
const SignUpWrappedPage =() => <PageWrapper Component={() => <SignUpPage/>}/>

const RouterComponent = () => {


    return <BrowserRouter>
        <Routes>
            {/*<Route path={'home'} Component={HomePage}/>*/}
            <Route path={'posts'} Component={PostsPage}/>
            <Route path={'post/:postID'} Component={PostPage}/>
            <Route path={''} Component={() => <Navigate to={'/posts'}/>}/>
            <Route path='*' Component={NotFound404}/>
            <Route path={'sign-in'} Component={SignInWrappedPage}/>
            <Route path={'sign-up'} Component={SignUpWrappedPage}/>
        </Routes>
    </BrowserRouter>
}

export default RouterComponent