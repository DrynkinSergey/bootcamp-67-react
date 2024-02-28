// Action creator

import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
export const changeStep = SUPER_PUPER_ARGUMENT_FOR_MY_FN_REDUX => ({
	type: CHANGE_STEP,
	payload: SUPER_PUPER_ARGUMENT_FOR_MY_FN_REDUX,
})

// const sum = (a, b) => a + b

// sum(1, 3)
// sum(33, 22)
// sum('hello', 'world')
