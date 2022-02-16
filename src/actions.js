import {ADD_TODO} from './actions/types'

export const addTodo = (text) => {

return{
    type: ADD_TODO,
    id: Math.random().toString(36).substring(2, 15),
    text,
 } };