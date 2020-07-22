import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './Input.module.css';
import {Button} from "../button/Button";



type InputPropsType = {
    newNames: string
    setNewNames: (value: string) => void
    HelloNames: (value: string) => void
}



export function Input(props: InputPropsType) {

    let [error, setError] = useState<string | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        props.setNewNames(e.currentTarget.value)
    };


    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.HelloNames(props.newNames);
            onErrorHelloNames()
        }
    }

    function onErrorHelloNames() {
        if (props.newNames.trim() !== '') {
            props.HelloNames(props.newNames);
            setError(' ')
        } else {
            setError('Field is required')
        }
    }


    return (
        <div>
            <input
                    value={props.newNames}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    />
                    <Button title={'+'} callbackFun={()=>{onErrorHelloNames}}/>
                {error && <div className={classes.errorMessage}> {error}</div>}
        </div>

    )

}