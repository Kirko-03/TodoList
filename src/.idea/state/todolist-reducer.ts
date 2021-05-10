import {FilterTaskType, TodolistsType} from './../../App'
import {v1} from "uuid";

const CHANGE_STATUS = 'CHANGE-STATUS'
const CHANGE_TODOLIST_TITLE = 'CHANGE-TODOLIST-TITLE'
const REMOVE_TODOLIST = 'REMOVE-TODOLIST'
const CHANGE_TODOLIST_FILTER = 'CHANGE-TODOLIST-FILTER'
const ADD_TODOLIST = 'ADD-TODOLIST'
export type RemoveTodoListAC = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type ChangeStatusAC = {
    type:'CHANGE-STATUS'
    taskId: string,
    isDone: boolean,
    todolistId: string
}

type ChangeTodolistFilterAC = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterTaskType
}

type ChangeTodolistTitleAC = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type AddTodolistAC = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId:string

}
type ActionType = RemoveTodoListAC | ChangeTodolistFilterAC | ChangeTodolistTitleAC | AddTodolistAC
export const todolistsReducer = (state: Array<TodolistsType>, action: ActionType): Array<TodolistsType> => {
    switch (action.type) {
        case REMOVE_TODOLIST:
            let stateCopy = {...state}
            return state.filter(tl => tl.id !== action.id)
        case CHANGE_TODOLIST_FILTER: {
            let stateCopy = {...state}
            let todolist = state.find(tl => tl.id === action.id);
            if (todolist)
                todolist.filter = action.filter
            return stateCopy
        }
        case CHANGE_TODOLIST_TITLE: {
            let stateCopy = {...state}
            let todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title
            }
            return stateCopy
        }
        case ADD_TODOLIST: {
            return [...state, {
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }]
        }
        default:
            throw new Error("I don't understand this type")
    }
}
export const AddTodolistAC = (title: string): AddTodolistAC => {
    return {type: "ADD-TODOLIST", title: title,todolistId:v1()}
}
export const RemoveTodolistAC = (todolistId: string): RemoveTodoListAC => {
    return {type: "REMOVE-TODOLIST", id: todolistId}
}
export const ChangeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleAC => {
    return {type: "CHANGE-TODOLIST-TITLE", id: id, title: title}
}
export const ChangeTodolistFilter = (id: string, filter: FilterTaskType): ChangeTodolistFilterAC => {
    return {type: "CHANGE-TODOLIST-FILTER", id: id, filter: filter}
}