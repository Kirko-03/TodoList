import {userReducer} from './user-reducer'

test('user reducer should increment only age',()=>{
    const startState = {age:17,childrenCount:0,name:'Kirych'};

    const endState = userReducer(startState,{type:'INCREMENT-AGE'})
    expect(endState.age).toBe(19);
    expect(endState.childrenCount).toBe(0);
});
test('user reducer should increment only childrenCount',()=>{
    const startState = {age:17,childrenCount:0,name:'Kirych'};
    const endState = userReducer(startState,{type:'INCREMENT-CHILDREN-COUNT'})
    expect(endState.age).toBe(17)
    expect(endState.childrenCount).toBe(0);
})
test('user reducer should change new name',()=>{
    const startState = {age:17,childrenCount:0,name:'Kirych'};
    const newName = 'Dimas'
    const endState = userReducer(startState,{type:'NEW-NAME',newName:newName})
    expect(endState.name).toBe(newName)
})