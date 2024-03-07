import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	refetchOnFocus: true,
	refetchOnReconnect: true,
	tagTypes: ['todos'],
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://65e584f3d7f0758a76e691a1.mockapi.io/',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => `todos`,
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		editTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		addToFav: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleTodoMutation,
	useEditTodoMutation,
	useAddToFavMutation,
} = todoApi
