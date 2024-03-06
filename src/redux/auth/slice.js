import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: null,
	loading: false,
	error: false,
	isLoggedIn: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectUser: state => state.user,
		selectIsLoggedIn: state => state.isLoggedIn,
		selectToken: state => state.isLoggedIn,
	},
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, state => {
				return initialState
			})
	},
})

export const authReducer = slice.reducer
export const { selectIsLoggedIn, selectUser, selectToken } = slice.selectors
