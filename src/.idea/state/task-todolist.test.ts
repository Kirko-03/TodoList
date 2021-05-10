import {TasksObjType, TodolistsType} from "../../App";
import {AddTodolistAC, todolistsReducer} from "./todolist-reducer";
import {taskReducer} from "./taskReducer"

test('ids should be equals,', () => {
    const startTaskState: TasksObjType = {}
    const startTodoListsState: Array<TodolistsType> = []
    const action = AddTodolistAC('new Todolist');
    const endTasksState = taskReducer(startTaskState, action)
    const endTodolistsState = todolistsReducer(startTodoListsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0];
    const idFromTodoLists = endTodolistsState[0].id;
    expect(idFromTasks).toBe(action.todolistId)
    expect(idFromTodoLists).toBe(action.todolistId)
})