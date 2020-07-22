import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './TodoList1.module.css';
import {v1} from "uuid";
import {Input} from "../../common/input/Input";
import {Button} from "../../common/button/Button";


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
    ChangTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'important' | 'completed'


export function Todolist(props: PropsType) {
    //task 3
    let [names, setNames] = useState([{id: v1(), name: ' Vasaya'}]);
    let [newNames, setNewNames] = useState(' ');

    // let [error, setError] = useState<string | null>(null);


    function HelloNames(setNewNames: string) {
        //if (newNames.length >= 2) или
        if (newNames.trim() !== '') {
            alert('Hello' + newNames);
            addNames(newNames);
        }
        // else {
        //     setError('Field is required')
        // }
        addNames(' ')
    }

    function addNames(newNames: string) {
        let writeName = {id: v1(), name: newNames};
        setNames([writeName, ...names]);
        console.log(newNames.length + names.length);
    }

    const onButtonNames = () => {
        HelloNames(newNames);
        setNewNames(' ');
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewNames(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // setError(null);
        if (e.charCode === 13) {
            HelloNames(newNames);
            setNewNames(' ')
        }
    }
    //
    // const onAllClickHandler = () => {
    //     props.changeFilter('all')
    // }
    //
    // const onImportantClickHandler = () => {
    //     props.changeFilter('important')
    // }
    // const onCompletedClickHandler = () => {
    //     props.changeFilter('completed')
    // }


    return <div className={classes.TodoList}>
        <br/>

        <input type="text"
               value={newNames}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
            // className={error ? 'error' : ' '}
        />

        <button onClick={onButtonNames}>+</button>
        {/*<Input newNames={newNames} setNewNames={setNewNames} HelloNames={HelloNames}/>*/}

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
                                callbackFun={() => {props.removeTask(t.id)}}/>
                    </li>
                })
            }
        </ol>
        <div className={classes.btnTL}>

            <Button title={'all'}
                    callbackFun={() => {props.changeFilter('all')}}/>
            <Button title={'important'}
                    callbackFun={() => {props.changeFilter('important')}}/>
            <Button title={'completed'}
                    callbackFun={() => {props.changeFilter('completed')}}/>


            {/*<button onClick={onAllClickHandler}*/}
            {/*        className={props.filter === 'all' ? classes.activeFilter : ' '}>All*/}
            {/*</button>*/}
            {/*<button onClick={onImportantClickHandler}*/}
            {/*        className={props.filter === 'important' ? classes.activeFilter : ' '}>Important*/}
            {/*</button>*/}
            {/*<button onClick={onCompletedClickHandler}*/}
            {/*        className={props.filter === 'completed' ? classes.activeFilter : ' '}>Completed*/}
            {/*</button>*/}
        </div>
    </div>
}