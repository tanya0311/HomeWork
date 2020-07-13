import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './TodoList1.module.css';
import {v1} from "uuid";


type TaskType = {
    id: string
    title: string
    p: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (newFilterValues: FilterValuesType) => void
}

export type FilterValuesType = 'all' | 'important' | 'completed'


export function Todolist(props: PropsType) {
    //task 3
    let [names, setNames] = useState([{id: v1(), name: ' Vasaya'}]);
    let [newNames, setNewNames] = useState(' ');

    function addNames(newNames: string) {
        let writeName = {id: v1(), name: newNames};
        setNames([writeName, ...names]);
        console.log(newNames.length + names.length);
    }

    function HelloNames(setNewNames: string) {
        if (newNames.length >= 2) {
            alert('Hello' + newNames);
            addNames(newNames);
        }
        addNames(' ')
    }

    const onButtonNames = () => {
        HelloNames(newNames);
        setNewNames(' ');
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewNames(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        {
            if (e.charCode === 13) {
                HelloNames(newNames);
                setNewNames(' ')
            }
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
    }

    const onImportantClickHandler = () => {
        props.changeFilter('important')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }


    return <div className={classes.TodoList}>
        <br/>
        <input type="text"
               value={newNames}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
        />
        <button onClick={onButtonNames}>+</button>
        <p>The number of objects in the array: {names.length}</p>
        <br/>

        <h1>{props.title}</h1>
        <ol>
            {
                props.tasks.map((t) => {
                    const onRemoveHandler = () => {
                        props.removeTask(t.id)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <p className={classes.text}>{t.title} <span>{t.p}</span></p>
                        <button className={classes.delete}
                                onClick={onRemoveHandler}> delete
                        </button>
                    </li>
                })
            }
        </ol>
        <div className={classes.btnTL}>
            <button onClick={onAllClickHandler}
                    className={classes.btn}>All
            </button>
            <button onClick={onImportantClickHandler}
                    className={classes.btn}>Important
            </button>
            <button onClick={onCompletedClickHandler} className={classes.btn}>Completed
            </button>
        </div>
    </div>
}