import React, {useCallback, useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from './state/todolists-reducer';
import {
    addTaskAC,
    addTasksTC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    tasksReducer
} from './state/tasks-reducer';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithReducers() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodolists] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    const removeTask=useCallback((id: string, todolistId: string)=> {
        const action = removeTaskAC(id, todolistId);
        dispatchToTasks(action);
    },[])

    const addTask=useCallback((title: string, todolistId: string)=> {
        const action = addTaskAC({
            description:'string',
            title:title,
            todoListId:todolistId,
            status: 200,
            priority:1,
            startDate:"",
            deadline:"",
            id:'idsad',
            order:1,
            addedDate:"",
            isDone:false
        });
        dispatchToTasks(action);
    },[])

    const changeStatus=useCallback((id: string, isDone: boolean, todolistId: string)=> {
        const action = changeTaskStatusAC(id, isDone, todolistId);
        dispatchToTasks(action);
    },[])

    const changeTaskTitle=useCallback((id: string, newTitle: string, todolistId: string)=> {
        const action = changeTaskTitleAC(id, newTitle, todolistId);
        dispatchToTasks(action);
    },[])

    const changeFilter=useCallback((value: FilterValuesType, todolistId: string)=> {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatchToTodolists(action);
    },[])

    const removeTodolist=useCallback((id: string)=> {
        const action = removeTodolistAC(id);
        dispatchToTasks(action);
        dispatchToTodolists(action);
    },[])

    const changeTodolistTitle=useCallback((id: string, title: string)=> {
        const action = changeTodolistTitleAC(id, title);
        dispatchToTodolists(action);
    },[])

    const addTodolist=useCallback((title: string)=> {
        const action = addTodolistAC(title);
        dispatchToTasks(action);
        dispatchToTodolists(action);
    },[])

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
                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
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

export default AppWithReducers;
