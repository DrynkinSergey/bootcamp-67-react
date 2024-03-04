import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchArticlesThunk = createAsyncThunk('fetchArticles', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('/articles')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const addArticleThunk = createAsyncThunk('addOne', async (body, thunkApi) => {
	try {
		const { data } = await axios.post('/articles', body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const deleteArticleThunk = createAsyncThunk('deleteOne', async (id, thunkApi) => {
	try {
		const { data } = await axios.delete(`/articles/${id}`)
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
