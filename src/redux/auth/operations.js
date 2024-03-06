import { createAsyncThunk } from '@reduxjs/toolkit'
import { goitApi, removeToken, setToken } from '../../axiosConfig/goitApi'

export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
	try {
		const { data } = await goitApi.post('users/signup', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('login', async (credentials, thunkApi) => {
	try {
		const { data } = await goitApi.post('users/login', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
	try {
		await goitApi.post('users/logout')
		// removeToken()
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
