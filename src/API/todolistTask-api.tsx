import { TaskType } from '../Todolist'
import { instanceTodolist } from './todolist-api'
export type TaskDomainType={
    description:string
    title:string
    status: number
    priority:number
    startDate: string
    deadline: string
    id:string
    todoListId:string
    order:number
    addedDate: string
    isDone:boolean
}
type TaskAPIType={
error:string
    items:Array<TaskDomainType>
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
        return  instance.get<TaskAPIType>(`/todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID:string,title:string){
        return instance.post<ResponseType<{item:TaskDomainType}>>(`/todo-lists/${todolistID}/tasks`,{title:title})

    },
    deleteTask(todolistID:string,taskId:string){
        return instance.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskId}`)
    },
    updateTask(todolistID:string,taskId:string,title:string){
        return instance.put<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskId}`,{title:title})
    }

}