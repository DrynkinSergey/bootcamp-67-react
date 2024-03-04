import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filterSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './userSlice'
import logger from 'redux-logger'
import { toast } from 'react-toastify'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const persistConfigFilter = {
	key: 'filter',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer)

const myMiddleware = store => next => action => {
	console.log(action)
	if (action.payload?.title?.toLowerCase() === 'angular') {
		toast.warn('Angular detected')
		action.payload.title = 'love'
		// return
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todos: persistedReducer,
		filter: persistedReducerFilter,
		user: userReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(myMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})
export let persistor = persistStore(store)
