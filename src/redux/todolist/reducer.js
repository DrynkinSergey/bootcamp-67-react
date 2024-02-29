import { createReducer } from '@reduxjs/toolkit'
import { addToFav, addTodo, changeFilter, editTodo, removeTodo, toggleTodo } from './actions'
import { ADD_TODO, ADD_TO_FAVORITE, CHANGE_FILTER, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	items: [{ id: '1', title: 'Learn Redux', completed: true, favorite: false }],
	filter: 'all',
}

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(removeTodo, (state, action) => {
			const itemIndex = state.items.findIndex(item => item.id === action.payload)
			state.items.splice(itemIndex, 1)
		})
		.addCase(toggleTodo, (state, action) => {
			const item = state.items.find(item => item.id === action.payload)
			item.completed = !item.completed
		})
		.addCase(addTodo, (state, action) => {
			state.items.push(action.payload)
		})
		.addCase(changeFilter, (state, action) => {
			state.filter = action.payload
		})
		.addCase(addToFav, (state, action) => {
			const item = state.items.find(item => item.id === action.payload)
			item.favorite = !item.favorite
		})
		.addCase(editTodo, (state, action) => {
			const item = state.items.findIndex(item => item.id === action.payload.id)
			state.items.splice(item, 1, action.payload)
		})
})

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case removeTodo.type:
// 			return {
// 				...state,
// 				items: state.items.filter(item => item.id !== action.payload),
// 			}
// 		case toggleTodo.type:
// 			return {
// 				...state,
// 				items: state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		case addTodo.type:
// 			return {
// 				...state,
// 				items: [...state.items, action.payload],
// 			}
// 		case changeFilter.type:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		case addToFav.type:
// 			return {
// 				...state,
// 				items: state.items.map(item => (item.id === action.payload ? { ...item, favorite: !item.favorite } : item)),
// 			}
// 		case editTodo.type:
// 			return {
// 				...state,
// 				items: state.items.map(item => (item.id === action.payload.id ? { ...action.payload } : item)),
// 			}
// 		default:
// 			return state
// 	}
// }
