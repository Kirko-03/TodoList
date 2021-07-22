import {addTaskAC, removeTaskAC, tasksReducer, TasksStateType} from "../features/TodolistsList/tasks-reducer";
import {TaskPriorities, TaskStatuses} from "../api/todolists-api";
import {addTodolistAC, removeTodolistAC} from "../features/TodolistsList/todolists-reducer";

let startState: TasksStateType = {};
beforeEach(() => {
    startState = {
        "todolistId1": [
            { id: "1", title: "CSS", description:'',status:TaskStatuses.Completed,priority:TaskPriorities.Hi,startDate:'',deadline:'',todoListId:'',order:0, addedDate:'' },
            { id: "2", title: "JS", description:'',status:TaskStatuses.Completed,priority:TaskPriorities.Low,startDate:'',deadline:'',todoListId:'',order:0, addedDate:'' },
            { id: "3", title: "React", description:'',status:TaskStatuses.New,priority:TaskPriorities.Low,startDate:'',deadline:'',todoListId:'',order:0, addedDate:''  }
        ],
        "todolistId2": [
            { id: "1", title: "bread", description:'',status:TaskStatuses.InProgress,priority:TaskPriorities.Low,startDate:'',deadline:'',todoListId:'',order:0, addedDate:''  },
            { id: "2", title: "milk", description:'',status:TaskStatuses.Draft,priority:TaskPriorities.Middle,startDate:'',deadline:'',todoListId:'',order:0, addedDate:''  },
            { id: "3", title: "tea", description:'',status:TaskStatuses.New,priority:TaskPriorities.Low,startDate:'',deadline:'',todoListId:'',order:0, addedDate:'' }
        ]
    };
});

test('correct task should be deleted from correct array', () => {
    const action = removeTaskAC("2", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
});
test('correct task should be added to correct array', () => {
    const action = addTaskAC( { id: "4", title: "sausages", description:'',status:TaskStatuses.New,priority:TaskPriorities.Low,startDate:'',deadline:'',todoListId:"todolistId2",order:0, addedDate:'' }
    );

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("sausages");
});

test('new array should be added when new todolist is added', () => {
    const action = addTodolistAC({ id: "3", title: "tea", order:0, addedDate:'' }
    );

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});
test('propertry with todolistId should be deleted', () => {
    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});
