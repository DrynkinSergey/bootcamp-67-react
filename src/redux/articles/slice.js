import { createSlice } from '@reduxjs/toolkit'
import { addArticleThunk, deleteArticleThunk, fetchArticlesThunk } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'articles',
	initialState,
	selectors: {
		selectArticles: state => state.items,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchArticlesThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})
			.addCase(addArticleThunk.fulfilled, (state, { payload }) => {
				state.items.push(payload)
			})
			.addCase(deleteArticleThunk.fulfilled, (state, { payload }) => {
				state.items = state.items.filter(item => item.id !== payload)
			})
	},
})

export const articlesReducer = slice.reducer
export const { selectArticles } = slice.selectors
