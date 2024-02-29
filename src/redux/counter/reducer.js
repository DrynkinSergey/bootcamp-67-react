import { changeStep, decrement, increment, reset } from './actions'
import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants'

const initialState = {
	counter: 11,
	step: 1,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case increment.type:
			return {
				...state,
				counter: state.counter + state.step,
			}
		case decrement.type:
			return {
				...state,
				counter: state.counter - state.step,
			}
		case reset.type:
			return {
				...state,
				counter: 1,
				step: 1,
			}
		case changeStep.type:
			return {
				...state,
				step: action.payload,
			}
		default:
			return state
	}
}
