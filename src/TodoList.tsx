import React, { useState } from "react";
import {FilterTaskType} from "./App";

export type TaskType={
    id:string
    isDone:boolean
    title:string
}

type TitleType = {
    title:string
    removeTask : (id:string) => void
    changeFilter :(value:FilterTaskType) => void
    tasks:Array<TaskType>
    addTask:(title:string) => void
    changeStatus:(id:string,isDone:boolean)=> void
}

export let TodoList = (props:TitleType) => {
    let [value,setValue] = useState("")
    return(
    <div className="App">
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
                <button onClick={()=>{props.addTask(value)}}>+</button>
            </div>
            <ul>
                {props.tasks.map(t=> <li><input type="checkbox" onClick={()=>{props.changeStatus(t.id,t.isDone)}} checked={t.isDone}/> <span>{t.title}</span><button onClick={()=>{props.removeTask(t.id)}}>x</button></li>)}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter("all")}}>All</button>
                <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    </div>
    )
}