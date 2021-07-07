import axios from 'axios'

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export const instanceTodolist = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1',
        withCredentials: true,
        headers:{
            'API-KEY':'670e02e0-a18b-4af1-b6d8-7bc8edc695ba'
        }
    }
)

export const todolistAPI={
    getTodolist(){
        return   instanceTodolist.get<Array<TodolistType>>('/todo-lists')
    },
    createTodolist(title:string){
        return instanceTodolist.post<ResponseType<{item:TodolistType}>>('/todo-lists',{title:title})

    },
    deleteTodolist(todolistID:string){
        return instanceTodolist.delete<ResponseType>(`/todo-lists/${todolistID}`)
    },
    updateTodolist(todolistID:string,title:string){
        return  instanceTodolist.put<ResponseType>(`/todo-lists/${todolistID}`,{title:title})
    }

}