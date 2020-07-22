import React, {useState} from 'react';
import './App.css';
import Message from "./components/Message/Message";
import {Todolist, FilterValuesType} from './components/TodoList/TodoList1';
import {v1} from "uuid";


function App() {


    let [tasks, setTasks] = useState([
        {id: v1(), title: "homework", p: "hight", isDone: true},
        {id: v1(), title: "reading", p: "low", isDone: false},
        {id: v1(), title: "cleaning", p: "low", isDone: false},
        {id: v1(), title: "video", p: "middle", isDone: true},
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all');


    function changeFilter(newFilterValues: FilterValuesType) {
        setFilter(newFilterValues);
    };


    let tasksForTodoList = tasks;
    if (filter === 'important') {
        tasksForTodoList = tasks.filter(t => t.p === "hight")
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)

    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function ChangStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);
    }


    return (
        <div className="App">
            <Todolist
                title="TodoList"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                ChangTaskStatus={ChangStatus}
                filter={filter}
            />

            <Message name="Tatsiana" text="100% где-то могла накосячить, но буду стараться)" time="20:00"/>
        </div>
    );
}

export default App;
