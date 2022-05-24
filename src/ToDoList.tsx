import React from "react";

type TaskType = {
    id:number,
    isDone:boolean,
    tytle:string
}
type ToDoListPropsType = {
    tytle:string,
    tasks:Array<TaskType>
}
export let ToDoList = (props:ToDoListPropsType) => {
    return (
        <div>
            <h3>{props.tytle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].tytle}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].tytle}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].tytle}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}