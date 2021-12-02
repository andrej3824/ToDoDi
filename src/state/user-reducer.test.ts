import {userReducer} from "./user-reduser";

test('ueser reduser should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: "Dimych"}

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should be increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: "Dimych"}

    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
})

test('user reducer should be change name of user', () => {
    const startState = {age: 20, childrenCount: 2, name: "Dimych"}
    const newName = 'Andrey'

    const endState = userReducer(startState, {type: "CHANGE-ONLY-NAME", newName})

    expect(endState.name).toBe('Andrey')
    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(2)

})













