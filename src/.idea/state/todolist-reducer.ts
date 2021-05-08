import {FilterTaskType, TodolistsType} from './../../App'
import {v1} from "uuid";

const CHANGE_TODOLIST_TITLE='CHANGE-TODOLIST-TITLE'
const REMOVE_TODOLIST='REMOVE-TODOLIST'
const CHANGE_TODOLIST_FILTER='CHANGE-TODOLIST-FILTER'
const ADD_TODOLIST='ADD-TODOLIST'
type RemoveTodoListAC = {
    type:'REMOVE-TODOLIST'
    id:string
}

type ChangeTodolistFilterAC = {
    type:'CHANGE-TODOLIST-FILTER'
    id:string
    filter:FilterTaskType
}

type ChangeTodolistTitleAC = {
    type:'CHANGE-TODOLIST-TITLE'
    id:string
    title:string
}

type AddTodolistAC = {
    type:'ADD-TODOLIST'
    title:string

}
type ActionType = RemoveTodoListAC|ChangeTodolistFilterAC|ChangeTodolistTitleAC|AddTodolistAC
export const todolistsReducer = (state:Array<TodolistsType>, action:ActionType):Array<TodolistsType>=>{
    switch(action.type){
        case REMOVE_TODOLIST:
            let stateCopy = {...state}
            return stateCopy.filter(tl => tl.id !== action.id)
        case CHANGE_TODOLIST_FILTER: {
            let stateCopy = {...state}
            const todolist = stateCopy.find(tl => tl.id === action.id);
            if (todolist)
                todolist.filter = action.filter
            return stateCopy
        }
        case CHANGE_TODOLIST_TITLE:
        {
            let stateCopy={...state}
          const todolist = stateCopy.find(tl=>tl.id===action.id);
          if(todolist) {
              todolist.title = action.title
          }
        return stateCopy
        }
        case ADD_TODOLIST:{
            return[...state,{
            id:v1(),
                title:action.title,
                filter:'all'
            }]}
        default:
            throw new Error("I don't understand this type")
    }
}
export const AddTodolistAC = (title:string) :AddTodolistAC =>{
    return {type:"ADD-TODOLIST",title:title}
}
export const RemoveTodolistAC = (todolistId:string) :RemoveTodoListAC =>{
    return {type:"REMOVE-TODOLIST",id:todolistId}
}
export const ChangeTodolistTitleAC = (id:string,title:string):ChangeTodolistTitleAC=>{
    return {type:"CHANGE-TODOLIST-TITLE",id:id,title:title}
}
export const ChangeTodolistFilter = (id:string,filter:FilterTaskType):ChangeTodolistFilterAC=>{
    return {type:"CHANGE-TODOLIST-FILTER",id:id,filter:filter}
}