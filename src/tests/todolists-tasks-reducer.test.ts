import {tasksReducer, TasksStateType} from "../features/TodolistsList/tasks-reducer";
import {TodolistType} from "../api/todolists-api";
import {addTodolistAC, TodolistDomainType, todolistsReducer} from "../features/TodolistsList/todolists-reducer";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistDomainType> = [];

    const action = addTodolistAC({id: 'todolistId1', title: "What to learn", addedDate:'9:10:53', order:0});

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolist.id);
    expect(idFromTodolists).toBe(action.todolist.id);
});
