import React from 'react';

function Button(props) {
    return (
        <button className={props.cssClass} onClick={() => props.handler(props.value)} >
            {props.name}
        </button>
    )
}

export default Button;