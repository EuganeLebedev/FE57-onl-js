// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import ThemedContext from "./globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "./utils/globalTypes.ts";
import RouterComponent from "./router/RouterComponent.tsx";
import {useState} from "react";

function App() {
    const defaultStorageTheme = localStorage.getItem("prefTheme")
    let defaultTheme = defaultStorageTheme == "dark" ? ThemeEnum.dark : ThemeEnum.light
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  return (
    <>
        <ThemedContext.Provider value={{theme, setTheme}}>
            <RouterComponent/>
        </ThemedContext.Provider>
    </>
  )
}

export default App
