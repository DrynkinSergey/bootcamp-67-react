import { createReducer } from '@reduxjs/toolkit'
import { changeStep, decrement, increment, reset } from './actions'
import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants'

const initialState = {
	counter: 11,
	step: 1,
}

// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				counter: state.counter + state.step,
// 			}
// 		case decrement.type:
// 			return {
// 				...state,
// 				counter: state.counter - state.step,
// 			}
// 		case reset.type:
// 			return {
// 				...state,
// 				counter: 1,
// 				step: 1,
// 			}
// 		case changeStep.type:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter -= state.step
		})
		.addCase(reset, (state, action) => {
			state.counter = 0
			state.step = 1
		})
		.addCase(changeStep, (state, action) => {
			state.step = action.payload
		})
})
