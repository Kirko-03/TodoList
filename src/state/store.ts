import {combineReducers, createStore} from "redux";
import {taskReducer} from "./taskReducer";
import {todolistsReducer} from "./todolist-reducer";

const rootReducer = combineReducers({
    tasks:taskReducer,
    todolists:todolistsReducer
})
export const store=createStore(rootReducer)
export type AppStoreReducers = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;