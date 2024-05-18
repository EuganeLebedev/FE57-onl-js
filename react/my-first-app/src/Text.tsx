import React from 'react';

interface Props {
    value: string
}

const Text = (props: Props) => {
    return (
        <div><span>{props.value}</span></div>
    );
}

export default Text;
