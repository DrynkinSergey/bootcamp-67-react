import { counterReducer } from './counter/reducer'
import { todoReducer } from './todolist/reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
