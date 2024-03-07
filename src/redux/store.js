import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filterSlice'
import { userReducer } from './userSlice'
import { articlesReducer } from './articles/slice'
import { authReducer } from './auth/slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { todoApi } from './RTK_Query/todoApi'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)
// https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
		articles: articlesReducer,
		user: userReducer,
		auth: persistedReducer,
		[todoApi.reducerPath]: todoApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(todoApi.middleware),

	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
setupListeners(store.dispatch)
