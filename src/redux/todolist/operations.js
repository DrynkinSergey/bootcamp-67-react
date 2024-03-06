import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { goitApi } from '../../axiosConfig/goitApi'

axios.defaults.baseURL = 'https://65e584f3d7f0758a76e691a1.mockapi.io/'

// CRUD
// C - create
// R - read
// U - update
// D - delete

export const fetchDataThunk = createAsyncThunk('fetchData', async (_, thunkAPI) => {
	try {
		const { data } = await goitApi.get('/tasks')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
	try {
		const { data } = await goitApi.delete(`/tasks/${id}`)
		return data.id
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
	try {
		const { data } = await goitApi.post('/tasks', body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkAPI) => {
	try {
		const { data } = await goitApi.patch(`/tasks/${body.id}`, body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const editTodoThunk = createAsyncThunk('editTodo', async (body, thunkAPI) => {
	try {
		const { data } = await goitApi.patch(`/tasks/${body.id}`, body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addToFavThunk = createAsyncThunk('addToFav', async (body, thunkAPI) => {
	try {
		const { data } = await goitApi.patch(`/tasks/${body.id}`, body)
		return data.id
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

// export const fetchData = () => async dispatch => {
// 	try {
// 		dispatch(isLoading())
// 		const { data } = await axios.get('/todos')
// 		dispatch(fetchIsDone(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		await axios.delete(`todos/${id}`)
// 		dispatch(removeTodo(id))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const addTodoThunk = body => async dispatch => {
// 	try {
// 		const { data } = await axios.post('/todos', body)
// 		dispatch(addTodo(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const toggleTodoThunk = body => async dispatch => {
// 	try {
// 		const { data } = await axios.put(`/todos/${body.id}`, { ...body, completed: !body.completed })
// 		dispatch(toggleTodo(data.id))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }
// export const editTodoThunk = body => async dispatch => {
// 	try {
// 		const { data } = await axios.put(`/todos/${body.id}`, body)
// 		dispatch(editTodo(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }
