import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {

    let tasks1: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "React", isDone: true},
        {id: 3, title: "Redux", isDone: false},
    ]
    let tasks2: Array<TasksType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: true},
        {id: 3, title: "Tom and Jerry", isDone: false},
    ]


    return (
        <div className="App">
            <Todolist title={'what to learn'} tasks={tasks1}/>
            <Todolist title={'what to see'} tasks={tasks2}/>

        </div>
    );
}

export default App;
