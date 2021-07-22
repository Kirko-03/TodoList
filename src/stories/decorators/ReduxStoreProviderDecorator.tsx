import React from "react";
import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../../features/TodolistsList/tasks-reducer";
import {todolistsReducer} from "../../features/TodolistsList/todolists-reducer";
import {AppRootStateType} from "../../app/store";
import {TaskPriorities, TaskStatuses} from "../../api/todolists-api";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", addedDate: '9:10:53', order: 0, filter: 'all'},
        {id: "todolistId2", title: "What to buy", addedDate: '9:10:12', order: 2, filter: 'all'}
    ],
    tasks: {
        ["todolistId1"]: [
            {
                id: "1",
                title: "CSS",
                description: '',
                status: TaskStatuses.Completed,
                priority: TaskPriorities.Hi,
                startDate: '',
                deadline: '',
                todoListId: '',
                order: 0,
                addedDate: ''
            },
            {
                id: "2",
                title: "JS",
                description: '',
                status: TaskStatuses.Completed,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: '',
                order: 0,
                addedDate: ''
            },

        ],
        ["todolistId2"]: [
            {
                id: "1",
                title: "bread",
                description: '',
                status: TaskStatuses.InProgress,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: '',
                order: 0,
                addedDate: ''
            },
            {
                id: "2",
                title: "milk",
                description: '',
                status: TaskStatuses.Draft,
                priority: TaskPriorities.Middle,
                startDate: '',
                deadline: '',
                todoListId: '',
                order: 0,
                addedDate: ''
            },
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
