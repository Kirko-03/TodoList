import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterTaskType} from "./App";
import "./App.css"

export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

type TitleType = {
    title: string
    filter: FilterTaskType
    removeTask: (id: string) => void
    changeFilter: (value: FilterTaskType) => void
    tasks: Array<TaskType>
    addTask: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

export let TodoList = (props: TitleType) => {
    let [error, setError] = useState<string | null>(null)
    let [value, setValue] = useState("")

    function onClickAddTask() {
        setError("")
        if (value.trim() !== "") {
            props.addTask(value)
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
                props.addTask(value)
            } else
                setError("title is required")
        }
    }

    function allChangeFilter() {
        props.changeFilter("all")
    }

    function activeChangeFilter() {
        props.changeFilter("active")
    }

    function completedChangeFilter() {
        props.changeFilter("completed")
    }

    return (

        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={value} className={error ? "error" : ""} onChange={onChangeValue}
                           onKeyPress={onKeyPressHandler}/>
                    <button onClick={onClickAddTask}>+</button>
                    {error && <div className={"error-message"}>{error}</div>}
                </div>
                <ul>
                    {props.tasks.map(t => {

                        let onClickChangeStatus = () => {
                            props.changeStatus(t.id, t.isDone)
                        }
                        let onClickRemove = () => {
                            props.removeTask(t.id)
                        }

                        return <li><input type="checkbox" onClick={onClickChangeStatus} checked={t.isDone}/>
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