import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {ErrorType, RequestStatusType, SetErrorAC, SetStatusAC} from "../../app/app-reducer";
import React from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";


export const ErrorSnackbar = () => {
    const error = useSelector<AppRootStateType, ErrorType>(state => state.app.error)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {

        if (reason === 'clickaway') {
            return
        }
        dispatch(SetErrorAC(null))
        dispatch(SetStatusAC('idle'))
        setOpen(false)

    }
    return <div>
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
        <Snackbar open={status === 'succeeded'} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                Change was successful!
            </Alert>
        </Snackbar>
    </div>
}