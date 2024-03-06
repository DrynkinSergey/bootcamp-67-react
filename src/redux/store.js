import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filterSlice'

import { userReducer } from './userSlice'
import { articlesReducer } from './articles/slice'
import { authReducer } from './auth/slice'

// https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
		articles: articlesReducer,
		user: userReducer,
		auth: authReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
