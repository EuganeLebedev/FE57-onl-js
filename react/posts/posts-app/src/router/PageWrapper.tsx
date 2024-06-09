import Header from "../components/Header.tsx";
import {ContentContainer} from "./styles.ts";
import {ThemeEnum} from "../utils/globalTypes.ts";
import {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";


interface Props {
    Component:() => JSX.Element
}

const PageWrapper:React.FC<Props> = ({Component}) => {

    const {theme}= useContext(ThemedContext)
    const isDark = theme === ThemeEnum.dark

    return <>
        <Header/>
        <ContentContainer isDark={isDark}>
            {Component()}
        </ContentContainer>
    </>
}

export default PageWrapper