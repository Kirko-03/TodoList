import React, {ChangeEvent, KeyboardEvent, useState} from "react";

export type AddItemType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemType) {
    let [error, setError] = useState<string | null>(null)
    let [value, setValue] = useState("")
    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        setError("")
        if (e.charCode === 13) {
            if (value.trim() !== "") {
                props.addItem(value)
                setValue("")
            } else
                setError("title is required")
        }
    }

    function onClickAddTask() {
        setError("")
        if (value.trim() !== "") {
            props.addItem(value)
            setValue("")
        } else
            setError("title is required")
    }

    return (<div>
        <input value={value} className={error ? "error" : ""} onChange={onChangeValue}
               onKeyPress={onKeyPressHandler}/>
        <button onClick={onClickAddTask}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>)

}