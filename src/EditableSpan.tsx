import React, {ChangeEvent, useState} from "react";

type EditableSpanType={
    title:string
    onChange:(newValue:string)=>void
}

export function EditableSpan(props:EditableSpanType){
   let [editMode,setEditMode] = useState(false)
    let [title,setTitle] = useState(props.title)
let activeMode=()=> {
    setEditMode(true)
}
    let inertMode=()=>{
       debugger
       setEditMode(false)
        props.onChange(title)
    }
    let changeHandler=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setTitle(e.currentTarget.value)

    }
    return(
        editMode?<input onBlur={inertMode} onChange={changeHandler}  value={title} autoFocus/>:<span onClick={activeMode}>{title}</span>
    )}