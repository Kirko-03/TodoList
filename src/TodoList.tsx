import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterTaskType} from "./App";
import "./App.css"

export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

type TitleType = {
    id:string
    title: string
    filter: FilterTaskType
    removeTask: (id: string,todolistId:string) => void
    changeFilter: (value: FilterTaskType,todolistId:string) => void
    tasks: Array<TaskType>
    addTask: (title: string,todolistId:string) => void
    changeStatus: (id: string, isDone: boolean,todolistId:string) => void
    removeTodoList:(todolistId:string)=>void
}

export let TodoList = (props: TitleType) => {
    let [error, setError] = useState<string | null>(null)
    let [value, setValue] = useState("")

    function onClickAddTask() {
        setError("")
        if (value.trim() !== "") {
            props.addTask(value,props.id)
            setValue("")
        } else
            setError("title is required")
    }

    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        setError("")
        if (e.charCode === 13) {
            if (value.trim() !== "") {
                props.addTask(value,props.id)
                setValue("")
            } else
                setError("title is required")
        }
    }

    function allChangeFilter() {
        props.changeFilter("all",props.id)
    }

    function activeChangeFilter() {
        props.changeFilter("active",props.id)
    }

    function completedChangeFilter() {
        props.changeFilter("completed",props.id)
    }
let RemoveTodoList= () =>{
        props.removeTodoList(props.id)
}

    return (

        <div className="App">
            <div>
                <h3>{props.title}<button onClick={RemoveTodoList}>x</button></h3>

                <div>
                    <input value={value} className={error ? "error" : ""} onChange={onChangeValue}
                           onKeyPress={onKeyPressHandler}/>
                    <button onClick={onClickAddTask}>+</button>
                    {error && <div className={"error-message"}>{error}</div>}
                </div>
                <ul>
                    {props.tasks.map(t => {

                        let onClickChangeStatus = () => {
                            props.changeStatus(t.id, t.isDone,props.id)
                        }
                        let onClickRemove = () => {
                            props.removeTask(t.id,props.id)
                        }

                        return <li><input type="checkbox" onClick={onClickChangeStatus} className={t.isDone?"inviz":""} checked={t.isDone}/>
                            <span>{t.title}</span>
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