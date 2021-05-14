import {TasksObjType} from "../AppWithRedux";
import {addTaskAC, changeStatusAC, removeTaskAC, taskReducer} from './taskReducer'
import {addTodolistAC, removeTodolistAC} from './todolist-reducer'

test('correct task should change its status', () => {


    const startState: TasksObjType = ({

        "todolistId1": [{id: "1", title: "Meat", isDone: true},
            {id: "2", title: "Milk", isDone: false},
            {id: "3", title: "Fruit", isDone: true}],
        "todolistId2": [{id: "1", title: "Witcher3", isDone: false},
            {id: "2", title: "Gothic", isDone: false},
            {id: "3", title: "Need for speed", isDone: true}]
    })
    const action = changeStatusAC("2", true, "todolistId1")
    const endState = taskReducer(startState, action)
    expect(endState["todolistId1"][2].title).toBe("Fruit");
    expect(endState["todolistId2"][1].isDone).toBeFalsy();
    expect(endState["todolistId1"][2].isDone).toBeTruthy();
})
test('correct task should add  new task', () => {


    const startState: TasksObjType = ({

        "todolistId1": [{id: "1", title: "Meat", isDone: true},
            {id: "2", title: "Milk", isDone: false},
            {id: "3", title: "Fruit", isDone: true}],
        "todolistId2": [{id: "1", title: "Witcher3", isDone: false},
            {id: "2", title: "Gothic", isDone: false},
            {id: "3", title: "Need for speed", isDone: true}]
    })
    const action = addTaskAC("newTask", "todolistId2")
    const endState = taskReducer(startState, action)
    expect(endState["todolistId2"][0].title).toBe("newTask");
    expect(endState["todolistId2"][2].title).toBe("Gothic");
    expect(endState["todolistId2"][0].isDone).toBeFalsy();
})
test('correct todolist should remove task', () => {


    const startState: TasksObjType = ({

        "todolistId1": [{id: "1", title: "Meat", isDone: true},
            {id: "2", title: "Milk", isDone: false},
            {id: "3", title: "Fruit", isDone: true}],
        "todolistId2": [{id: "1", title: "Witcher3", isDone: false},
            {id: "2", title: "Gothic", isDone: false},
            {id: "3", title: "Need for speed", isDone: true}]
    })
    const action = removeTaskAC("1", "todolistId2")
    const endState = taskReducer(startState, action)
    expect(endState["todolistId2"][0].title).toBe("Gothic");
    expect(endState["todolistId1"][1].title).toBe("Milk");
    expect(endState["todolistId2"][1].title).toBe("Need for speed");
    expect(endState["todolistId2"][2]).toBeUndefined();
})
test('new property with array should be added when  new todolist is added', () => {


    const startState: TasksObjType = ({

        "todolistId1": [{id: "1", title: "Meat", isDone: true},
            {id: "2", title: "Milk", isDone: false},
            {id: "3", title: "Fruit", isDone: true}],
        "todolistId2": [{id: "1", title: "Witcher3", isDone: false},
            {id: "2", title: "Gothic", isDone: false},
            {id: "3", title: "Need for speed", isDone: true}]
    })
    const action = addTodolistAC("title no matter")
    const endState = taskReducer(startState, action)
    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([])

})
test('new property with array should be deleted', () => {


    const startState: TasksObjType = ({

        "todolistId1": [{id: "1", title: "Meat", isDone: true},
            {id: "2", title: "Milk", isDone: false},
            {id: "3", title: "Fruit", isDone: true}],
        "todolistId2": [{id: "1", title: "Witcher3", isDone: false},
            {id: "2", title: "Gothic", isDone: false},
            {id: "3", title: "Need for speed", isDone: true}]
    })
    const action = removeTodolistAC("todolistId2")
    const endState = taskReducer(startState, action)
    const keys = Object.keys(endState)


    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined()

})