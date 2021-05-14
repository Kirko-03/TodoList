import {FilterTaskType, TodolistsType} from '../AppWithRedux'
import {v1} from "uuid";
const CHANGE_TODOLIST_TITLE = 'CHANGE-TODOLIST-TITLE'
const REMOVE_TODOLIST = 'REMOVE-TODOLIST'
const CHANGE_TODOLIST_FILTER = 'CHANGE-TODOLIST-FILTER'
const ADD_TODOLIST = 'ADD-TODOLIST'
export type RemoveTodoListAC = {
    type: 'REMOVE-TODOLIST'
    id: string
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
type ActionType =   ChangeTodolistFilterAC | ChangeTodolistTitleAC | AddTodolistAC|RemoveTodoListAC
const initialState:Array<TodolistsType>=[]
export const todolistsReducer = (state=initialState , action: ActionType): Array<TodolistsType> => {
    switch (action.type) {
        case REMOVE_TODOLIST: {
            let stateCopy = {...state}
            return stateCopy.filter(tl => tl.id !== action.id)
        }
        case CHANGE_TODOLIST_FILTER: {
            let stateCopy = [...state]
            let todolist = stateCopy.find(tl => tl.id === action.id);
            if (todolist)
                todolist.filter = action.filter
            return stateCopy
        }
        case CHANGE_TODOLIST_TITLE: {
            let stateCopy = {...state}
            let todolist = stateCopy.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title
            }
            return stateCopy
        }
        case ADD_TODOLIST: {
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all'},...state]
        }
        default:
            return state
    }
}
export const addTodolistAC = (title: string): AddTodolistAC => {
    return {type: "ADD-TODOLIST", title: title,todolistId:v1()}
}
export const removeTodolistAC = (todolistId: string): RemoveTodoListAC => {
    return {type: "REMOVE-TODOLIST", id: todolistId}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleAC => {
    return {type: "CHANGE-TODOLIST-TITLE", id: id, title: title}
}
export const changeTodolistFilterAC = ( filter: FilterTaskType,id: string,): ChangeTodolistFilterAC => {
    return {type: "CHANGE-TODOLIST-FILTER", id: id, filter: filter}
}