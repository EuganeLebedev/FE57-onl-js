import React, {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
import Typo from "../components/Typo.tsx"
import {ButtonHeader} from "./styles.ts";


export interface ButtonProps {
    title: string
    onClick: () => void
    link?: string
    showLabel?: boolean
    customStyle?:  React.CSSProperties

}


const Button = (props:ButtonProps) => {
    const {onClick,title, showLabel, customStyle} = props

    // const match = useMatch(link || '')

    const {theme}= useContext(ThemedContext)

    const handleClick = () => {
        onClick()
    }

    const getNewThemeStyle = () => {
        if (customStyle) return customStyle
        const style = {
            padding: "15px",
            borderRadius: "2px",
            border: "none",
            color: 'white',
        }
        if (theme === ThemeEnum.dark) {
            return {
                ...style,
                backgroundColor: '#213547',
            }
        }
        return {
            ...style,
            backgroundColor: "#575dc4",

        }
    }


    return <div>
        {showLabel && <Typo value={title} customStyle={customStyle}/> }
    <ButtonHeader className="button" onClick={handleClick} style={getNewThemeStyle()} type="button" value={title}/></div>
}


export default Button