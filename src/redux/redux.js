import {combineReducers, createStore} from "redux";


const ADD_TODO = 'ADD_TODO'
const DELL_TODO = 'DELL_TODO'
const LOAD_LOCAL_LIST = 'LOAD_LOCAL_LIST'

let initialState = {
    todo: []
}

const todoReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    stateCopy.todo = [...state.todo]
    switch (action.type) {
        case LOAD_LOCAL_LIST: {
            stateCopy.todo = action.payload
            return stateCopy
        }
        case ADD_TODO: {
            stateCopy.todo.push(action.payload)
            localStorage.setItem('localSaved', JSON.stringify(stateCopy.todo))
            return stateCopy
        }
        case DELL_TODO: {
            let index = stateCopy.todo.findIndex(el => el.id === action.payload)
            if(index === -1){
                return stateCopy
            } else {
                stateCopy.todo.splice(index,1)
                localStorage.setItem('localSaved', JSON.stringify(stateCopy.todo))
                return stateCopy
            }

        }
        default: {
            return stateCopy
        }
    }
}

//ACTION CREATORS______________________
export let addTodo = (payload) => {
    return {type: ADD_TODO, payload}
}
export let dellTodo = (payload) => {
    return {type: DELL_TODO, payload}
}
export let loadLocalList = (payload) => {
    return {type: LOAD_LOCAL_LIST, payload}
}


//_____________________________________


let reducers = combineReducers({
    tasks: todoReducer
})

let store = createStore(reducers);

export default store;