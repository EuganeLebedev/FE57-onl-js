
import { Link } from 'react-router-dom';
import {SignInContainer} from "./styles.ts";
import {SignUp} from "../components/Auth/SignUp.tsx";

export const SignUpPage = () => {
    return (
        <SignInContainer>
            <h1>Sign up</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
        </SignInContainer>
    )
}
