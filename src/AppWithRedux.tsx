import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from 'uuid';
import {AddItemForm} from "./AddItem";
import {addTaskAC, changeStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "./state/taskReducer"
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer,
    addTodolistAC
} from "./state/todolist-reducer";
import {act} from "react-dom/test-utils";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreReducers} from "./state/store";


export type FilterTaskType = "all" | "active" | "completed"

export type TodolistsType = {
    id: string
    title: string
    filter: FilterTaskType
}
export type TasksObjType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {
    const todolists = useSelector<AppStoreReducers,Array<TodolistsType>>(state => state.todolists)
     const dispatch=useDispatch()
    //
    // let todolistId1 = v1()
    // let todolistId2 = v1()

    // let [tasks, dispatchSetTasksObj] = useReducer(taskReducer,{
    //     [todolistId1]: [{id: v1(), title: "Meat", isDone: true},
    //         {id: v1(), title: "Milk", isDone: false},
    //         {id: v1(), title: "Fruit", isDone: true}],
    //     [todolistId2]: [{id: v1(), title: "Witcher3", isDone: false},
    //         {id: v1(), title: "Gothic", isDone: false},
    //         {id: v1(), title: "Need for speed", isDone: true}]
    // })

    let addTask = (title: string, todolistId: string) => {
        dispatch(addTaskAC(title,todolistId))
        // let task = {id: v1(), title: title, isDone: false}
        // let tasks = tasksObj[todolistId]
        // let newTasks = [task, ...tasks]
        // tasksObj[todolistId] = newTasks
        // setTasksObj({...tasksObj})
    }

    let removeTask = (id: string, todolistId: string) => {
        dispatch(removeTaskAC(id,todolistId))
        // let tasks = tasksObj[todolistId]
        // let filteredTask = tasks.filter(t => t.id !== id)
        // tasksObj[todolistId] = filteredTask
        // setTasksObj({...tasksObj})
    }
    let changeFilter = (value: FilterTaskType,todolistId:string) => {
        dispatch(changeTodolistFilterAC(value,todolistId))
        // let todolist = todolists.find(tl => tl.id === todolistId)
        // if (todolist)
        //     todolist.filter = value
        // setTodolists([...todolists])


    }
    let removeTodoList = (todolistId: string) => {
        // let todolist = todolists.filter(tl => tl.id !== todolistId)
        // setTodolists(todolist)
        // delete tasksObj[todolistId]
        // setTasksObj({...tasksObj})
        dispatch(removeTodolistAC(todolistId))
    }

    let changeStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        // let tasks = tasksObj[todolistId]
        // let newStatus = tasks.find(t => t.id === taskId)
        // if (newStatus)
        //     newStatus.isDone = !isDone
        // setTasksObj({...tasksObj})
        dispatch(changeStatusAC(taskId,isDone,todolistId))
    }
    let changeTaskTitle = (taskId: string, newValue: string, todolistId: string) => {
        // let tasks = tasksObj[todolistId]
        // let newStatus = tasks.find(t => t.id === taskId)
        // if (newStatus)
        //     newStatus.title = newValue
        // setTasksObj({...tasksObj})
        dispatch(changeTaskTitleAC(taskId,newValue,todolistId))
    }
    let changeTodolistTitle = (id: string, title: string) => {
        dispatch(changeTodolistTitleAC(id,title))
        // const todolist = todolists.find(tl => tl.id === id)
        // if (todolist)
        //     todolist.title = title
        // setTodolists([...todolists]);
    }
    // let [todolists, dispatchSetTodolists] = useReducer(todolistsReducer,[
    //     {id: todolistId1, title: "Eat", filter: "all"},
    //     {id: todolistId2, title: "Games", filter: "completed"}
    // ])

    let addTodolist=(title: string)=> {
        // let todolist: TodolistsType = {id: v1(), title: title, filter: "all"}
        // setTodolists([todolist, ...todolists])
        //
        let action = addTodolistAC(title)
        dispatch(action)
        // setTasksObj({...tasksObj, [todolist.id]: []})
    }
    return (
        <div className={"App"}>
        <AddItemForm addItem={(title) => {
        addTodolist(title)
    }}/>
    {
        todolists.map(tl => {
           // let taskForTodoList = tasks[tl.id]
           //  if (tl.filter === "active")
           //      taskForTodoList = taskForTodoList.filter(t => !t.isDone)
           //  if (tl.filter === "completed")
           //      taskForTodoList = taskForTodoList.filter(t => t.isDone)

            return <TodoList key={tl.id} id={tl.id} title={tl.title}  filter={tl.filter}
            changeFilter={changeFilter}
            changeTodolistTitle={changeTodolistTitle}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask} removeTodoList={removeTodoList}
            addTask={addTask} changeStatus={changeStatus}/>
        })
    }
    </div>
);
}

export default AppWithRedux;
