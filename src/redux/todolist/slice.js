import { createSlice, nanoid } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'todos',
	initialState: { items: [], loading: false, error: null },
	reducers: {
		fetchIsDone: (state, { payload }) => {
			state.items = payload
			state.loading = false
		},
		isLoading: (state, { payload }) => {
			state.loading = true
		},
		isError: (state, { payload }) => {
			state.error = payload
			state.loading = false
		},
		removeTodo: (state, { payload }) => {
			state.items = state.items.filter(item => item.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload)
			item.completed = !item.completed
		},
		addTodo: (state, { payload }) => {
			state.items.push(payload)
		},

		editTodo: (state, { payload }) => {
			const itemIndex = state.items.findIndex(item => item.id === payload.id)
			state.items.splice(itemIndex, 1, payload)
		},
		addToFav: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload)
			item.favorite = !item.favorite
		},
	},
	selectors: {
		selectTodos: state => state.items,
		selectIsLoading: state => state.loading,
		selectIsError: state => state.error,
	},
})

export const todoReducer = slice.reducer
export const { addToFav, addTodo, editTodo, removeTodo, toggleTodo, isLoading, isError, fetchIsDone } = slice.actions
export const { selectTodos, selectIsLoading, selectIsError } = slice.selectors
