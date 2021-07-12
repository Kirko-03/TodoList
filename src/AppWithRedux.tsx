import React, {useCallback, useEffect} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC, fetchTodolistsTC,
    removeTodolistAC,
    setTodolistsAC,
    TodolistDomainType
} from './state/todolists-reducer';
import {
    addTaskAC, addTasksTC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    deleteTasksTC,
    fetchTasksTC,
    removeTaskAC
} from './state/tasks-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {todolistAPI} from "./API/todolist-api";
import {action} from "@storybook/addon-actions";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {
    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodolistsTC())
    },[])
    const removeTask=useCallback((id: string, todolistId: string)=> {
        dispatch(deleteTasksTC(todolistId,id))
    },[dispatch])

    const addTask=useCallback(function (title: string, todolistId: string){
        dispatch(addTasksTC(title,todolistId))
    },[])

    const changeStatus=useCallback((id: string, isDone: boolean, todolistId: string)=> {
        const action = changeTaskStatusAC(id, isDone, todolistId);
        dispatch(action);
    },[dispatch])

    const changeTaskTitle=useCallback((id: string, newTitle: string, todolistId: string)=> {
        const action = changeTaskTitleAC(id, newTitle, todolistId);
        dispatch(action);
    },[dispatch])

    const changeFilter=useCallback((value: FilterValuesType, todolistId: string)=> {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    },[dispatch])

    const  removeTodolist=useCallback((id: string)=> {
        const action = removeTodolistAC(id);
        dispatch(action);
    },[dispatch])

   const changeTodolistTitle=useCallback((id: string, title: string)=> {
        const action = changeTodolistTitleAC(id, title);
        dispatch(action);
    },[dispatch])

    const addTodolist=useCallback((title: string)=> {
        const action = addTodolistAC(title);
        dispatch(action);
    },[dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            }

                            return <Grid item key={tl.id}>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
