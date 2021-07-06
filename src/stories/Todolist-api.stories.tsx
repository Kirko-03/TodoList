import {useEffect, useState} from "react";
import axios from 'axios'
import {todolistAPI} from "../API/todolist-api";
export default {
    title: 'API'
}
 const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1',
        withCredentials: true,
        headers:{
            'API-KEY':'670e02e0-a18b-4af1-b6d8-7bc8edc695ba'
         }
     }
 )
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
todolistAPI.getTodolist().then((res)=>{
    setState(res.data)
})
    }, [])
    return <div> {JSON.stringify(state)}</div>

}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        todolistAPI.createTodolist('kirko')
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
       todolistAPI.deleteTodolist('d9bac938-1570-45aa-b22e-c227257a0f67')
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        todolistAPI.updateTodolist('9cb666aa-3723-4e24-9ae3-12ed8c3d194e','Bebra')
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>

}