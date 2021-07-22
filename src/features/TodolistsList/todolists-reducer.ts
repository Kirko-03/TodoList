import {todolistsAPI, TodolistType} from '../../api/todolists-api'
import {Dispatch} from 'redux'
import {RequestStatusType, SetErrorAC, SetStatusAC, SetStatusType} from "../../app/app-reducer";

const initialState: Array<TodolistDomainType> = []

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [{...action.todolist, filter: 'all', entityStatus: 'idle'}, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        case 'SET-TODOLISTS':
            return action.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
        case 'CHANGE-TODOLIST-ENTITY-STATUS':
            return state.map(tl => tl.id === action.id ? {...tl,entityStatus:action.entityStatus}:tl)
        default:
            return state
    }
}

// actions
export const removeTodolistAC = (id: string) => ({type: 'REMOVE-TODOLIST', id} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: 'ADD-TODOLIST', todolist} as const)
export const changeTodolistTitleAC = (id: string, title: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    id,
    title
} as const)
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => ({
    type: 'CHANGE-TODOLIST-FILTER',
    id,
    filter
} as const)
export const setTodolistsAC = (todolists: Array<TodolistType>) => ({type: 'SET-TODOLISTS', todolists} as const)
export const changeTodolistEntityStatusAC = (id: string, status: RequestStatusType) => ({
    type: "CHANGE-TODOLIST-ENTITY-STATUS",
    id: id,
    entityStatus: status
} as const)
// thunks
export const fetchTodolistsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(SetStatusAC('loading'))
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
                dispatch(SetStatusAC('idle'))
            })

    }
}
export const removeTodolistTC = (todolistId: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeTodolistEntityStatusAC(todolistId,'loading'))
        todolistsAPI.deleteTodolist(todolistId)
            .then(() => {

                dispatch(removeTodolistAC(todolistId))
                dispatch(SetStatusAC('succeeded'))
            })
    }
}
export const addTodolistTC = (title: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(SetStatusAC('loading'))
        todolistsAPI.createTodolist(title)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(addTodolistAC(res.data.data.item))
                    dispatch(SetStatusAC('succeeded'))
                } else {
                    if (res.data.messages.length)
                        dispatch(SetErrorAC(res.data.messages[0]))
                    else {
                        dispatch(SetErrorAC('Some error'))
                    }
                    dispatch(SetStatusAC('failed'))
                }

            })
    }
}
export const changeTodolistTitleTC = (id: string, title: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(SetStatusAC('loading'))
        todolistsAPI.updateTodolist(id, title)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(changeTodolistTitleAC(id, title))
                    dispatch(SetStatusAC('succeeded'))
                } else {
                    if (res.data.messages.length) {
                        dispatch(SetErrorAC(res.data.messages[0]))
                    } else {
                        dispatch(SetErrorAC('Some error'))
                    }
                    dispatch(SetStatusAC('failed'))
                }
            })

    }
}

// types
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
type ActionsType =
    | RemoveTodolistActionType
    | AddTodolistActionType
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>
    | ReturnType<typeof SetErrorAC>
    |ReturnType<typeof changeTodolistEntityStatusAC >
    | SetTodolistsActionType | SetStatusType
export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
    entityStatus: RequestStatusType
}
