import React, {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";
// import {useMatch} from "react-router-dom";
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
    const {onClick,title, showLabel,link, customStyle} = props

    // const match = useMatch(link || '')

    const {theme}= useContext(ThemedContext)

    const handleClick = () => {
        onClick()
    }
        // const renderLabel = () => {
        // if (showLabel) return <Typo value={title}/>
        // }

    const getNewThemeStyle = () => {
        // if (match) return  {backgroundColor: '#ff0'}
        if (customStyle) return customStyle
        if (theme === ThemeEnum.dark) {
            return {backgroundColor: '#213547', color: 'white'}
        }
        return {backgroundColor: 'white', color: '#213547'}
    }


    return <div>
        {showLabel && <Typo value={title} customStyle={customStyle}/> }
        {/*{renderLabel()}*/}
    <ButtonHeader className="button" onClick={handleClick} style={getNewThemeStyle()} type="button" value={title}/></div>
}


export default Button