import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addTask: (title: string) => void

}

export function AddItemForm(props: AddItemFormPropsType) {
    let [error, setError] = useState<string | null>(null)
    let [value, setValue] = useState("")

    function onClickAddTask() {
        setError("")
        if (value.trim() !== "") {
            props.addTask(value)
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
                props.addTask(value)
                setValue("")
            } else
                setError("title is required")
        }
    }

    return (<div>
        <input value={value} className={error ? "error" : ""} onChange={onChangeValue}
               onKeyPress={onKeyPressHandler}/>
        <button onClick={onClickAddTask}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>)
}