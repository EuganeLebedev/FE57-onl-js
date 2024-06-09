import {createContext, useContext} from "react";
import {ThemeEnum} from "../utils/globalTypes.ts";

type ThemeContextType = {
    theme: ThemeEnum,
    setTheme: (newTheme: ThemeEnum) => void,
}

const defaultStorageTheme = localStorage.getItem("prefTheme")
let defaultTheme = defaultStorageTheme == "dark" ? ThemeEnum.dark : ThemeEnum.light

const ThemedContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => {}
})

export default ThemedContext;

export const useThemeContext = () => useContext(ThemedContext)