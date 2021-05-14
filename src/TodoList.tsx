import React from "react";
import {FilterTaskType} from "./AppWithRedux";
import "./App.css"
import {AddItemForm} from "./AddItem";
import {EditableSpan} from "./EditTaskTitle";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import { TasksObjType} from "./AppWithRedux";
import {addTaskAC, changeStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/taskReducer";
import {changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./state/todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreReducers} from "./state/store";

export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

type TitleType = {
    id: string
    title: string
    filter: FilterTaskType
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterTaskType, todolistId: string) => void
    // tasks: Array<TaskType>
    addTask: (title: string, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newValue: string, todolistId: string) => void
    removeTodoList: (todolistId: string) => void
    changeTodolistTitle: (id: string, title: string) => void
}


export let TodoList = (props: TitleType) => {
    const tasks=useSelector<AppStoreReducers,Array<TaskType>>(state => state.tasks[props.id])
     const dispatch=useDispatch()

    function allChangeFilter() {
        dispatch(changeTodolistFilterAC("all", props.id))
    }

    function activeChangeFilter() {
        dispatch(changeTodolistFilterAC("active", props.id))
    }

    function completedChangeFilter() {
        dispatch(changeTodolistFilterAC("completed", props.id))
    }

    let RemoveTodoList = () => {
        dispatch(removeTodolistAC(props.id))
    }
    const addTask = (title: string) => {
       dispatch(addTaskAC(title, props.id))
    }
    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleAC(props.id, title))
    }
    return (
        <div className="App">

            <div>

                <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={RemoveTodoList}/>
                    </IconButton>
                </h3>
                <AddItemForm addItem={(title => {
                    dispatch(addTaskAC(title,props.id))
                })}/>
                <ul>
                    {tasks.map(t => {

                        let onClickChangeStatus = () => {
                            dispatch(changeStatusAC(t.id, t.isDone, props.id))
                        }
                        let onClickRemove = () => {
                            dispatch(removeTaskAC(t.id, props.id))
                        }
                        let onChangeHandler = (newValue: string) => {
                            dispatch(changeTaskTitleAC(t.id, newValue, props.id))
                        }

                        return <li><Checkbox color="secondary" onClick={onClickChangeStatus}
                                             className={t.isDone ? "inviz" : ""} checked={t.isDone}/>
                            <EditableSpan title={t.title} onChange={onChangeHandler}/>
                            <IconButton aria-label="delete">
                                <DeleteIcon onClick={onClickRemove}/>
                            </IconButton>
                        </li>
                    })}
                </ul>
                <div>
                    <Button color="primary" onClick={allChangeFilter}
                            style={{color: "yellow"}}
                            variant={props.filter === "all" ? "contained" : "text"}>All
                    </Button>
                    <Button onClick={activeChangeFilter}
                            style={{color: "yellow"}}
                            color="primary"
                            variant={props.filter === "active" ? "contained" : "text"}>Active
                    </Button>
                    <Button onClick={completedChangeFilter}
                            style={{color: "yellow"}}
                            color="primary"
                            variant={props.filter === "completed" ? "contained" : "text"}>Completed
                    </Button>
                </div>
            </div>
        </div>
    )
}

