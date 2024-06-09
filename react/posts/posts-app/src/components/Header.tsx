import Button from "./Button.tsx";
import {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import {useNavigate} from "react-router-dom";
import {HeaderWrapper} from "./styles.ts";



const Header = () => {

    const {theme, setTheme} = useContext(ThemedContext)


    const navigation = useNavigate()
    const handleSwitchTheme = () => {
        const newTheme = theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
        setTheme(
            newTheme
        )
        localStorage.setItem("prefTheme", newTheme)
    }

    const handleOpenHome = () => navigation('/')
    const handleOpenCatalog = () => navigation('/posts')

    const isDark = theme === ThemeEnum.dark




    return <HeaderWrapper isDark={isDark}>
        <Button title="Home page" link={'/'} onClick={handleOpenHome}/>
        <Button title="Posts" link={'/posts'} onClick={handleOpenCatalog}/>
        <Button title="Switch theme" onClick={handleSwitchTheme}/>
    </HeaderWrapper>
}

export default Header