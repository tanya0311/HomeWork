import React from 'react';
import classes from './Button.module.css';


type ButtonType = {
    title: string
    callbackFun: () => void
}


export function Button(props: ButtonType) {
    return <button
        className={props.title === 'delete' ? classes.deletButton : classes.button}
        onClick={props.callbackFun}>{props.title}</button>
}

