import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import { v1 } from 'uuid';

export type FilterTaskType = "all"|"active"|"completed"

function App() {
    let [tasks,setTasks] = useState<Array<TaskType>>([
        {id:v1(),title:"Meat",isDone:true},
        {id:v1(),title:"Milk",isDone:false},
        {id:v1(),title:"Fruit",isDone:true}])
    let [filter,setFilter] = useState<FilterTaskType>("all")
    // let task2 = [
    //     {id:1,title:"Witcher3",isDone:false},
    //     {id:2,title:"Gothic",isDone:false},
    //     {id:3,title:"Need for speed",isDone:true}
    // ]
    let taskForTodoList = tasks
    if(filter === "active")
        taskForTodoList = tasks.filter(t=>!t.isDone)
    if(filter === "completed")
        taskForTodoList = tasks.filter(t=>t.isDone)

    let addTask = (title:string) => {
 let newTask = {id:v1(),title:title,isDone:false}
 setTasks([newTask,...tasks])
    }

let removeTask = (id:string) => {
        let filteredTask = tasks.filter(t=>t.id!==id)
    setTasks(filteredTask)
    }
    let changeFilter = (value:FilterTaskType) =>{
        setFilter(value)
    }
    let changeStatus = (id:string,isDone:boolean)=>{
       let newStatus = tasks.find(t=>t.id===id)
        if(newStatus)
        newStatus.isDone = !isDone
        setTasks([...tasks])
    }

    return (
<div className={"App"}>
        <TodoList title={"Eat"} tasks={taskForTodoList} changeFilter={changeFilter} removeTask={removeTask} addTask={addTask} changeStatus={changeStatus}/>
    {/*<TodoList title={"Games"} tasks={task2}/>*/}
</div>
    );
}

export default App;
