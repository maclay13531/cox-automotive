import React from 'react';

const modalInput = (props) => {
    return (
        <div>
            <h5>{props.label}</h5>
            <input id={props.label}/>
        </div>
    )
};

export default modalInput;