import {TasksObjType, TodolistsType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodolistAC, RemoveTodoListAC} from "./todolist-reducer";

type RemoveTaskType = {
    type: "REMOVE-TASK"
    taskId: string
    todolistId: string
}
type ChangeStatusType = {
    type: "CHANGE-STATUS"
    taskId: string
    isDone: boolean
    todoListId: string
}
type ChangeTaskTitleType = {
    type: "CHANGE-TASK-TITLE"
    taskId: string
    title: string
    todoListId: string
}
type AddTaskType = {
    type: "ADD-TASK"
    title: string
    todolistId: string
}
type ActionType = ChangeStatusType | ChangeTaskTitleType | AddTaskType | RemoveTaskType | AddTodolistAC | RemoveTodoListAC
const initialState:TasksObjType={}
export const taskReducer = (state=initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-STATUS": {
            const stateCopy = {...state}
            let tasks = stateCopy[action.todoListId]
            stateCopy[action.todoListId]=tasks.map(t=>t.id!==action.taskId?{...t,isDone:action.isDone}:t)
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            let stateCopy = {...state}
            let tasks = state[action.todoListId]
            let newTitle = tasks.find(t => t.id === action.taskId)
            if (newTitle)
                newTitle.title = action.title
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        case "REMOVE-TASK": {
            let stateCopy = {...state}
            let tasks = state[action.todolistId]
            let filteredTask = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTask
            return stateCopy
        }
        case "ADD-TODOLIST": {
            let stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case "REMOVE-TODOLIST": {
            const stateCopy = {...state};
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            return state
    }
}
export const changeStatusAC = (taskId: string, isDone: boolean, todoListId: string): ChangeStatusType => {
    return {type: "CHANGE-STATUS", taskId, isDone, todoListId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todoListId: string): ChangeTaskTitleType => {
    return {type: "CHANGE-TASK-TITLE", taskId, title, todoListId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskType => {
    return {type: "ADD-TASK", title, todolistId}
}
export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskType => {
    return {type: "REMOVE-TASK", taskId, todolistId}
}
