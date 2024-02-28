import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'

export const removeTodo = id => ({ type: REMOVE_TODO, payload: id })
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
