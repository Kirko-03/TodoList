import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";

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

                setError("empty title")
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
        <TextField  id="standard-basic" label="Enter title" value={value} className={error ? "error" : ""} onChange={onChangeValue}
               onKeyPress={onKeyPressHandler}/>
        <Button color={"primary"} variant="contained" style={{marginBottom:"-15px"}} onClick={onClickAddTask}>+</Button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>)

}