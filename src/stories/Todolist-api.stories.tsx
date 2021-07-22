import {useEffect, useState} from "react";
import {todolistsAPI} from "../api/todolists-api";


export default {
    title: 'API/Todolist-API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists().then((res) => {
            debugger
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>

}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('kirko')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.deleteTodolist('5122489c-22bf-4233-b88c-b45ff4ff4458')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.updateTodolist('6ea5d211-a682-40b1-9045-64dee2097f3d', 'WOW')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
