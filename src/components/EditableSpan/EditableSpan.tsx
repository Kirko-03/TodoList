import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';

export type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    disabled:boolean
}

export const EditableSpan = React.memo(function ({value,onChange,disabled}: EditableSpanPropsType) {
    console.log("EditableSpan called");
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        if(!disabled)
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onClick={activateEditMode}>{value}</span>
});
