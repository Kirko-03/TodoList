import React from 'react'
import './App.css'
import {AppBar, Button, Container, IconButton, LinearProgress, Toolbar} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useSelector} from "react-redux";
import {RequestStatusType} from "./app-reducer";
import {AppRootStateType} from "./store";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";

function App() {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <div className="App">
            <AppBar style={{background: 'green'}} position="static">

                <Toolbar>
                    <IconButton edge="start" style={{color: 'yellow'}} aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Button style={{textAlign: 'center'}} color="inherit">Login</Button>
                </Toolbar>
                {status === 'loading' && <LinearProgress color="secondary"/>}
            </AppBar>
            <Container fixed>
                <TodolistsList/>
                <ErrorSnackbar/>
            </Container>
        </div>
    )
}

export default App
