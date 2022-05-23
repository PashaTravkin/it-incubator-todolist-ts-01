import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    return (
        <div className="App">
            <ToDoList tytle = {"What to learn1"}/>
            <ToDoList tytle = {"What to learn2"}/>
        </div>
    );
}

export default App;
