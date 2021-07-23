import {SetErrorAC, SetErrorType, SetStatusAC, SetStatusType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetErrorType | SetStatusType>) => {
    if (data.messages.length)
        dispatch(SetErrorAC(data.messages[0]))
    else {
        dispatch(SetErrorAC('Some error'))
    }
    dispatch(SetStatusAC('failed'))
}

export const handleServerNetworkError = (error:any,dispatch:Dispatch<SetErrorType|SetStatusType>) =>{
    dispatch(SetErrorAC(error.message))
    dispatch(SetStatusAC('failed'))

}