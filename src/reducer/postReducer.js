export const initialState = {
	items: [],
	totalPosts: 0,
	skip: 0,
	loading: false,
	error: null,
	query: '',
	isOpen: false,
	content: null,
}
export const postReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'fetchData':
			return {
				...state,
				items: [...state.items, ...action.payload.posts],
				totalPosts: action.payload.total,
			}
		case 'loading': {
			return {
				...state,
				loading: action.payload,
			}
		}
		case 'error': {
			return {
				...state,
				error: action.payload,
			}
		}

		case 'loadMore':
			return {
				...state,
				skip: state.skip + 4,
			}

		case 'toggleModal':
			return {
				...state,
				isOpen: !state.isOpen,
			}
		case 'changeQuery':
			return {
				...state,
				query: action.payload,
				items: [],
				skip: 0,
			}
		case 'seeInfo':
			return {
				...state,
				content: action.payload,
				isOpen: true,
			}
		default:
			return state
	}
}
