import {FC} from "react";
// import {useAuth} from "../../hooks/UseAuth";
import {Button, Container, FormElement} from "./styles";

interface FormProps {
    title: string;
    // handleClick: (email: string, pass: string) => void;
}

export const Form: FC<FormProps> = ({title}) => {
    // const {
    //     email,
    //     password,
    //     handleChangeEmail,
    //     handleChangePassword,
    //     handleAuth,
    // } = useAuth({ handleClick });

    return (
        <Container>
            <FormElement
                type="email"
                // value={email}
                // onChange={handleChangeEmail}
                placeholder="email"
            />
            <FormElement
                type="password"
                // value={password}
                // onChange={handleChangePassword}
                placeholder="password"
            />
            {/*<Button onClick={handleAuth}>*/}
            <Button>
                {title}
            </Button>
        </Container>
    )
}
