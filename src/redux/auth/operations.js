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
		removeToken()
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
	// Отримуємо збережений токен з редакса
	const savedToken = thunkApi.getState().auth.token
	// Перевіряємо є токен, чи нема?
	if (!savedToken) {
		// Якщо нема = відправляємо реджект і прериваємо операцію
		return thunkApi.rejectWithValue('Token is not exist!')
	}
	// якщо є, встановлюємо токен в наші хедери і робимо запит
	try {
		setToken(savedToken)
		const { data } = await goitApi.get('/users/me')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
