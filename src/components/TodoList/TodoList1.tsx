import React, {ChangeEvent, useState} from 'react';
import classes from './TodoList1.module.css';
import {v1} from "uuid";
import {Input} from "../../common/input/Input";
import {Button} from "../../common/button/Button";


export type TaskType = {
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
    ChangTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'important' | 'completed'


export function Todolist(props: PropsType) {
    //task 3
    let [names, setNames] = useState([{id: v1(), name: ' Vasaya'}]);
    let [newNames, setNewNames] = useState(' ');


    function HelloNames(newNames: string) {
        //if (newNames.length >= 2) или
        if (newNames.trim() !== '') {
            alert('Hello' + newNames);
            addNames(newNames);
        }
        // перенесла в  input
        // else {
        //    setError('Field is required')
        // }
        addNames(' ')
    }

    function addNames(newNames: string) {
        let writeName = {id: v1(), name: newNames};
        setNames([writeName, ...names]);
        console.log(newNames.length + names.length);
    }


    return <div className={classes.TodoList}>
        <br/>

        <Input newNames={newNames} setNewNames={setNewNames} HelloNames={HelloNames}/>

        <p>The number of objects in the array: {names.length}</p>
        <br/>
        <h1>{props.title}</h1>

        <ol>
            {
                props.tasks.map((t) => {
                    // const onRemoveHandler = () => {
                    //     props.removeTask(t.id)
                    // };
                    const onChang1Handler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.ChangTaskStatus(t.id, e.currentTarget.checked)
                    }
                    return <li key={t.id} className={t.isDone ? classes.isdone : ' '}>
                        <input type="checkbox" checked={t.isDone} onChange={onChang1Handler}/>
                        <p className={classes.text}>{t.title} <span>{t.p}</span></p>
                        {/*<button className={classes.delete}*/}
                        {/*        onClick={onRemoveHandler}> delete*/}
                        {/*</button>*/}
                        <Button title={'delete'}
                                callbackFun={() => {
                                    props.removeTask(t.id)
                                }}/>
                    </li>
                })
            }
        </ol>
        <div className={classes.btnTL}>

            <Button title={'all'}
                    callbackFun={() => {
                        props.changeFilter('all')
                    }}/>
            <Button
                title={'important'}
                callbackFun={() => {
                    props.changeFilter('important')
                }}
            />
            <Button title={'completed'}
                    callbackFun={() => {
                        props.changeFilter('completed')
                    }}/>


        </div>
    </div>
}

