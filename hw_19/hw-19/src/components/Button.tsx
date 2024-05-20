import {useState} from 'react';
import React from 'react';
import "./Button.css"

interface Props {
    value?: string,
    isActive?: boolean,
}

const Button = (props: Props) => {
    const [isActive, setActive] = useState(false);
    const { value } = props

    const ToggleClass = () => {
        setActive(!isActive);
    };
    return (
        <a href="#" className={`btn ${isActive? "btn-active": ""}`} onClick={ToggleClass}>
            <div className="btn-item"/>
        </a>
    );
}

export default Button;
