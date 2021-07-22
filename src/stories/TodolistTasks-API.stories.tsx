import {useEffect, useState} from "react";
import {TaskPriorities, TaskStatuses, todolistsAPI} from "../api/todolists-api";


export default {
    title: 'API/Tasks-API'
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistsAPI.getTasks('b32e0d91-1e96-4d9e-8563-3d1263d424aa').then((res) => {
            debugger
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>

}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistsAPI.createTask('b32e0d91-1e96-4d9e-8563-3d1263d424aa', 'Jeka')
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistsAPI.deleteTask('b32e0d91-1e96-4d9e-8563-3d1263d424aa', '2d929ed0-dbbe-4fa5-921a-9698592e3383')
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.updateTask('b32e0d91-1e96-4d9e-8563-3d1263d424aa', "32741dcd-a6f4-4bf8-ba5c-8190c34a243c",{   title:'task', description:'', status: TaskStatuses.New,
            priority: TaskPriorities.Middle,
            startDate: '',
            deadline: ''})
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}