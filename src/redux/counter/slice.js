import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	counter: 1,
	step: 1,
}

const slice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.counter += state.step
		},
		decrement: (state, action) => {
			state.counter -= state.step
		},
		reset: (state, action) => {
			state.counter = 1
			state.step = 1
		},
		changeStep: (state, action) => {
			state.step = action.payload
		},
	},
	selectors: {
		selectCounter: state => state.counter,
		selectStep: state => state.step,
	},
})

export const counterReducer = slice.reducer
export const { increment, decrement, reset, changeStep } = slice.actions
export const { selectCounter, selectStep } = slice.selectors
