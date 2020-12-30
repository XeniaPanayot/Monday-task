import React from 'react';
import styles from './Counter.module.css'

export type ButtonPropsType = {
    name: string
    onClick: () => void
    className: string
    disabled: boolean | undefined
}

function Button(props: ButtonPropsType) {

    return <button
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.name}
    </button>
}

export default Button;
