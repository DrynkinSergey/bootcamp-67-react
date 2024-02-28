import { ADD_TODO, ADD_TO_FAVORITE, CHANGE_FILTER, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	items: [{ id: '1', title: 'Learn Redux', completed: true, favorite: false }],
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
		case CHANGE_FILTER:
			return {
				...state,
				filter: action.payload,
			}
		case ADD_TO_FAVORITE:
			return {
				...state,
				items: state.items.map(item => (item.id === action.payload ? { ...item, favorite: !item.favorite } : item)),
			}
		case EDIT_TODO:
			return {
				...state,
				items: state.items.map(item => (item.id === action.payload.id ? { ...action.payload } : item)),
			}
		default:
			return state
	}
}
