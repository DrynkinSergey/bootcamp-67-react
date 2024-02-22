export const initialState = {
	counter: 1,
	step: 1,
}

export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + state.step,
			}

		case 'decrement':
			return {
				...state,
				counter: state.counter - state.step,
			}

		case 'reset':
			return initialState

		case 'changeStep':
			return {
				...state,
				step: action.payload,
			}
		default:
			return state
	}
}
