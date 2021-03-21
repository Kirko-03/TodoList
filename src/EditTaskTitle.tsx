import React, {ChangeEvent, useState} from "react";

type editableSpanType ={
    title:string
    onChange:(newValue:string)=>void
}

export const EditableSpan = (props:editableSpanType) => {
    let [editMode,setEditMode] = useState(false)
let [title,setTitle] = useState("")

    const activeMode = () => {
        setEditMode(true)
    setTitle(props.title)
    }
    const inactiveMode = () => {
        setEditMode(false)
        props.onChange(title);
    }
const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)

    return editMode
        ? <input value={title} onChange={onChangeTitleHandler} onBlur={inactiveMode} autoFocus/>:
        <span onClick={activeMode} >{props.title}</span>
}