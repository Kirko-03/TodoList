import React, {ChangeEvent} from "react";
import {FilterTaskType} from "./App";
import "./App.css"
import {AddItemForm} from "./AddItem";
import {EditableSpan} from "./EditTaskTitle";

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
    tasks: Array<TaskType>
    addTask: (title: string, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle:(id: string, newValue:string, todolistId: string) => void
    removeTodoList: (todolistId: string) => void
    changeTodolistTitle:(id:string,title:string) => void
}


export let TodoList = (props: TitleType) => {
    function allChangeFilter() {
        props.changeFilter("all", props.id)
    }

    function activeChangeFilter() {
        props.changeFilter("active", props.id)
    }

    function completedChangeFilter() {
        props.changeFilter("completed", props.id)
    }

    let RemoveTodoList = () => {
        props.removeTodoList(props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const changeTodolistTitle=(title:string)=>{
        props.changeTodolistTitle(props.id,title)
    }
    return (
        <div className="App">

            <div>

                <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                    <button onClick={RemoveTodoList}>x</button>
                </h3>
                <AddItemForm addItem={addTask}/>
                <ul>
                    {props.tasks.map(t => {

                        let onClickChangeStatus = () => {
                            props.changeStatus(t.id, t.isDone, props.id)
                        }
                        let onClickRemove = () => {
                            props.removeTask(t.id, props.id)
                        }
                        let onChangeHandler=(newValue:string)=>{
                            props.changeTaskTitle(t.id,newValue,props.id)
                        }

                        return <li><input type="checkbox" onClick={onClickChangeStatus}
                                          className={t.isDone ? "inviz" : ""} checked={t.isDone}/>
                            <EditableSpan title={t.title} onChange={onChangeHandler}/>
                            <button onClick={onClickRemove}>x</button>
                        </li>
                    })}
                </ul>
                <div>
                    <button onClick={allChangeFilter} className={props.filter === "all" ? "active-filter" : ""}>All
                    </button>
                    <button onClick={activeChangeFilter}
                            className={props.filter === "active" ? "active-filter" : ""}>Active
                    </button>
                    <button onClick={completedChangeFilter}
                            className={props.filter === "completed" ? "active-filter" : ""}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

