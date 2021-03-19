import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from 'uuid';

export type FilterTaskType = "all" | "active" | "completed"

type TodolistsType = {
    id: string
    title: string
    filter: FilterTaskType
}

function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [tasksObj, setTasksObj] = useState({
        [todolistId1]: [{id: v1(), title: "Meat", isDone: true},
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Fruit", isDone: true}],
        [todolistId2]: [{id: v1(), title: "Witcher3", isDone: false},
            {id: v1(), title: "Gothic", isDone: false},
            {id: v1(), title: "Need for speed", isDone: true}]
    })

    let addTask = (title: string,todolistId:string) => {
        let task = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todolistId]
        let newTasks = [task,...tasks]
        tasksObj[todolistId] = newTasks
        setTasksObj({...tasksObj})
    }

    let removeTask = (id: string,todolistId:string) => {
        let tasks = tasksObj[todolistId]
        let filteredTask = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filteredTask
        setTasksObj({...tasksObj})
    }
    let removeTodoList = (todolistId:string) =>{
        let todolist = todolists.filter(tl=>tl.id!==todolistId)
        setTodolists(todolist)
        delete tasksObj[todolistId]
        setTasksObj({...tasksObj})
    }
    let changeFilter = (value: FilterTaskType, todolistId: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist)
            todolist.filter = value
        setTodolists([...todolists])

    }
    let changeStatus = (taskId: string, isDone: boolean,todolistId:string) => {
        let tasks = tasksObj[todolistId]
        let newStatus = tasks.find(t => t.id === taskId)
        if (newStatus)
            newStatus.isDone = !isDone
        setTasksObj({...tasksObj})
    }

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "Eat", filter: "all"},
        {id: todolistId2, title: "Games", filter: "completed"}
    ])

    return (
        <div className={"App"}>{
            todolists.map(tl => {
                let taskForTodoList = tasksObj[tl.id]
                if (tl.filter === "active")
                    taskForTodoList = taskForTodoList.filter(t => !t.isDone)
                if (tl.filter === "completed")
                    taskForTodoList = taskForTodoList.filter(t => t.isDone)

                return <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={taskForTodoList} filter={tl.filter}
                                 changeFilter={changeFilter} removeTask={removeTask} removeTodoList={removeTodoList}
                                 addTask={addTask} changeStatus={changeStatus}/>
            })
        }{/*<TodoList title={"Games"} tasksObj={task2}/>*/}
        </div>
    );
}

export default App;
