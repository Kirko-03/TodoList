import axios from 'axios'

type TodolistType={
    addedDate: string
    id: string
    order: number
    title: string
}
type ResponseType<D>={
    resultCode: number
    messages: Array<string>,
    data:D
}
const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1',
        withCredentials: true,
        headers:{
            'API-KEY':'670e02e0-a18b-4af1-b6d8-7bc8edc695ba'
        }
    }
)

export const todolistAPI={
    getTodolist(){
        return  instance.get<Array<TodolistType>>('/todo-lists')
    },
    createTodolist(title:string){
        return instance.post<ResponseType<{item:TodolistType}>>('/todo-lists',{title:title})

    },
    deleteTodolist(todolistID:string){
        return instance.delete<ResponseType<{}>>(`/todo-lists/${todolistID}`)
    },
    updateTodolist(todolistID:string,title:string){
        return instance.put<ResponseType<{}>>(`/todo-lists/${todolistID}`,{title:title})
    }

}