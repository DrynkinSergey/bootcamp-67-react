import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filterSlice'

import { userReducer } from './userSlice'
import logger from 'redux-logger'
import { toast } from 'react-toastify'
import { articlesReducer } from './articles/slice'

// const myMiddleware = store => next => action => {
// 	console.log(action)
// 	if (action.payload?.title?.toLowerCase() === 'angular') {
// 		toast.warn('Angular detected')
// 		action.payload.title = 'love'
// 		// return
// 	}
// 	next(action)
// }

// state.todos.items
export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
		articles: articlesReducer,
		user: userReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
