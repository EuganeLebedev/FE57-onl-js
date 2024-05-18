import React from 'react';
// import Text from "./Text";
import './Button.css';

export const enum TypesEnum {
    primary = "primary",
    secondary = "secondary",
    secondary2 = "secondary2"
}

interface Props {
    title: string
    onClick: () => void
    type: TypesEnum
    isDisable?: boolean
}

const Button = (props:Props) => {
    // const handleClick = () => {
    //     props.onClick()
    // }
    const {title, onClick, type, isDisable=false} = props
    return (
        // <div><Text value="Text before button"></Text>
        //     <input type="button" value={props.title} onClick={handleClick}/>
        // </div>
        <div>
            <button disabled={isDisable} onClick={onClick} className={type}>{title}</button>
        </div>

    );
}

export default Button
