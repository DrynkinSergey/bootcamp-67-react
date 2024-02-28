import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	items: [{ id: '1', title: 'Learn Redux', completed: true }],
	filter: 'all',
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_TODO:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
			}
		case TOGGLE_TODO:
			return {
				...state,
				items: state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case ADD_TODO:
			return {
				...state,
				items: [...state.items, action.payload],
			}
		default:
			return state
	}
}
