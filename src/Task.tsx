import { Checkbox, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { ChangeEvent } from "react";
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "./Todolist";
type TaskInterType={
    removeTask: (taskId: string, todolistId: string) => void
    id: string
    taskId:string
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    tasks: TaskType
}
export const Task =React.memo((props:TaskInterType)=>{
    const onClickHandler = () => props.removeTask(props.taskId, props.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.taskId, newIsDoneValue, props.id);
    }
    const onTitleChangeHandler = (newValue: string) => {
        props.changeTaskTitle(props.taskId, newValue, props.id);
    }


    return (<div key={props.taskId} className={props.tasks.isDone ? "is-done" : ""}>
        <Checkbox
            checked={props.tasks.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.tasks.title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </div>
    )
})