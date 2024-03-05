import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit'
import {
	addToFavThunk,
	addTodoThunk,
	deleteTodoThunk,
	editTodoThunk,
	fetchDataThunk,
	toggleTodoThunk,
} from './operations'

const slice = createSlice({
	name: 'todos',
	initialState: { items: [], loading: false, error: null, value: '' },
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.items = state.items.filter(item => item.id !== payload)
			})
			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.items.push(payload)
			})

			.addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
				const itemIndex = state.items.findIndex(item => item.id === payload.id)
				state.items.splice(itemIndex, 1, payload)
			})
			.addCase(editTodoThunk.fulfilled, (state, { payload }) => {
				const itemIndex = state.items.findIndex(item => item.id === payload.id)
				state.items.splice(itemIndex, 1, payload)
			})
			.addCase(addToFavThunk.fulfilled, (state, { payload }) => {
				// const item = state.items.find(item => item.id === payload)
				// item.favorite = !item.favorite
				state.items = state.items.map(item => (item.id === payload ? { ...item, favorite: !item.favorite } : item))
			})
			.addMatcher(
				isAnyOf(fetchDataThunk.pending, deleteTodoThunk.pending, addTodoThunk.pending),
				(state, { payload }) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				isAnyOf(
					fetchDataThunk.rejected,
					deleteTodoThunk.rejected,
					addTodoThunk.rejected,
					addToFavThunk.rejected,
					editTodoThunk.rejected,
					toggleTodoThunk.rejected
				),
				(state, { payload }) => {
					state.loading = false
					state.error = payload
				}
			)
			.addMatcher(isAnyOf(fetchDataThunk.fulfilled, deleteTodoThunk.fulfilled, addTodoThunk.fulfilled), state => {
				state.loading = false
			})
	},
	selectors: {
		selectTodos: state => state.items,
		selectIsLoading: state => state.loading,
		selectIsError: state => state.error,
	},
})

export const todoReducer = slice.reducer
export const { setValue } = slice.actions
export const { selectTodos, selectIsLoading, selectIsError } = slice.selectors
