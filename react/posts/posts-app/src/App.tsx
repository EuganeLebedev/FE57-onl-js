import './App.scss'
import ThemedContext from "./globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "./utils/globalTypes.ts";
import RouterComponent from "./router/RouterComponent.tsx";
import {useState} from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

function App() {
    const defaultStorageTheme = localStorage.getItem("prefTheme")
    let defaultTheme = defaultStorageTheme == "dark" ? ThemeEnum.dark : ThemeEnum.light
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  return (
    <>
        <Provider store={store}>
            <ThemedContext.Provider value={{theme, setTheme}}>
                <RouterComponent/>
            </ThemedContext.Provider>
        </Provider>
    </>
  )
}

export default App
