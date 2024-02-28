import { ADD_TODO, ADD_TO_FAVORITE, CHANGE_FILTER, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'

export const removeTodo = id => ({ type: REMOVE_TODO, payload: id })
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
export const changeFilter = value => ({ type: CHANGE_FILTER, payload: value })
export const addToFav = id => ({ type: ADD_TO_FAVORITE, payload: id })
export const editTodo = todo => ({ type: EDIT_TODO, payload: todo })
