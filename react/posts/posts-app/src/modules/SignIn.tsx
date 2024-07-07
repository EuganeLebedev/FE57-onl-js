import { Link } from "react-router-dom";
import {SignInContainer} from "./styles.ts";
import {SignIn} from "../components/Auth/SignIn.tsx";

export const SignInPage = () => {
    return (
        <SignInContainer>
            <h1>Sign in</h1>
            <SignIn />
            <p>
                Or <Link to="/sign-up">sign up</Link>
            </p>
        </SignInContainer>
    )
}
