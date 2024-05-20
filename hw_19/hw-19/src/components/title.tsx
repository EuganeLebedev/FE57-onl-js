import React from 'react';
import "./title.css"

interface Props {
    value: string
}

const Title = (props: Props) => {
    return (
        <div className="title"><span>{props.value}</span></div>
    );
}

export default Title;
