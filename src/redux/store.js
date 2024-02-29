import { counterReducer } from './counter/slice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filterSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './userSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	// blacklist: ['error'],
	// whitelist: ['token'],
}
const persistConfigFilter = {
	key: 'filter',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer)

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: persistedReducer,
		filter: persistedReducerFilter,
		user: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
export let persistor = persistStore(store)
