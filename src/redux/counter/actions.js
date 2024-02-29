// Action creator

import { createAction } from '@reduxjs/toolkit'
import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants'

// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const reset = () => ({ type: RESET })
// export const changeStep = SUPER_PUPER_ARGUMENT_FOR_MY_FN_REDUX => ({
// 	type: CHANGE_STEP,
// 	payload: SUPER_PUPER_ARGUMENT_FOR_MY_FN_REDUX,
// })

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')

// console.log(increment())
// console.log(increment(123))
// console.log(increment('123'))
// console.log(increment([1, 2, 3, 4, 5, 6]))
