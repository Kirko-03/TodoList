
const initialState = {
    status: 'idle' as RequestStatusType,
    error:null as ErrorType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state,error:action.error}
        default:
            return state
    }
}

//types
type ActionsType = SetErrorType|SetStatusType
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null
export type SetErrorType = ReturnType<typeof SetErrorAC>
export type SetStatusType = ReturnType<typeof SetStatusAC>

//actions
export const SetStatusAC = (status:RequestStatusType) =>{
    return {type:'APP/SET-STATUS',status:status}as const
}
export const SetErrorAC = (error:ErrorType) =>{
    return {type:'APP/SET-ERROR',error:error}as const
}