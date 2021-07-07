
import { instanceTodolist } from './todolist-api'
type ItemsType={
    addedDate: string
    deadline: Date
    description: string
    id: string
    order: number
    priority:number
    startDate: Date
    status: number
    title: string
    todoListId: string
}
type TaskType={
error:string
    items:Array<ItemsType>
    totalCount:number
}
type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors:Array<string>
    data: D
}
const instance={...instanceTodolist}

export const taskAPI={
    getTasks(todolistID:string){
        return  instance.get<TaskType>(`/todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID:string,title:string){
        return instance.post<ResponseType<{items:ItemsType}>>(`/todo-lists/${todolistID}/tasks`,{title:title})

    },
    deleteTask(todolistID:string,taskId:string){
        return instance.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskId}`)
    },
    updateTask(todolistID:string,taskId:string,title:string){
        return instance.put<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskId}`,{title:title})
    }

}