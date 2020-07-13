import React from 'react';
import classes from './Message.module.css';


type MessageType = {
    name: string,
    text: string,
    time: string
}

const Message = (props:MessageType) => {
    return (
        <div className={classes.Message}>
            <div className={classes.MessageImg}>
                <img
                    src="https://mmo-dev.info/media/%D0%9C%D0%BE%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.4077/full"
                    alt="avatar"/>
            </div>
            <div className={classes.MessageText}>
                <div className={classes.userMessage}>
                    <h1 className={classes.userName}>{props.name}</h1>
                    <p className={classes.userText}>{props.text}</p>
                </div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}
export default Message;