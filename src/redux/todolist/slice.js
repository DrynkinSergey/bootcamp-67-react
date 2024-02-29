import { createSlice, nanoid } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'todos',
	initialState: { items: [] },
	reducers: {
		removeTodo: (state, { payload }) => {
			state.items = state.items.filter(item => item.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload)
			item.completed = !item.completed
		},
		addTodo: {
			prepare: title => {
				return {
					payload: {
						title,
						id: nanoid(),
						completed: false,
						favorite: false,
						createdAt: new Date().toLocaleTimeString(),
					},
				}
			},
			reducer: (state, { payload }) => {
				state.items.push(payload)
			},
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
	},
})

export const todoReducer = slice.reducer
export const { addToFav, addTodo, editTodo, removeTodo, toggleTodo } = slice.actions
export const { selectTodos } = slice.selectors
