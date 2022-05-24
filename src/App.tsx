import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    let tasks1 = [
        {id:1, isDone:true, tytle:"HTML&CSS"},
        {id:2, isDone:true, tytle:"JS"},
        {id:3, isDone:true, tytle:"React"}
    ]
    let tasks2 = [
        {id:4, isDone:true, tytle:"HTML&CSS"},
        {id:5, isDone:true, tytle:"JS"},
        {id:6, isDone:true, tytle:"React"}
    ]
    return (
        <div className="App">
            <ToDoList tytle = {"What to learn1"} tasks = {tasks1}/>
            <ToDoList tytle = {"What to learn2"} tasks = {tasks2}/>
        </div>
    );
}

export default App;
