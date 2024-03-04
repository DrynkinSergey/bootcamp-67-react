import axios from 'axios'
import { addTodo, fetchIsDone, isError, isLoading, removeTodo } from './slice'

axios.defaults.baseURL = 'https://65e584f3d7f0758a76e691a1.mockapi.io/'

// CRUD
// C - create
// R - read
// U - update
// D - delete

export const fetchData = () => async dispatch => {
	try {
		dispatch(isLoading())
		const { data } = await axios.get('/todos')
		dispatch(fetchIsDone(data))
	} catch (error) {
		dispatch(isError(error.message))
	}
}

export const deleteTodoThunk = id => async dispatch => {
	try {
		await axios.delete(`todos/${id}`)
		dispatch(removeTodo(id))
	} catch (error) {
		dispatch(isError(error.message))
	}
}

export const addTodoThunk = body => async dispatch => {
	try {
		const { data } = await axios.post('/todos', body)
		dispatch(addTodo(data))
	} catch (error) {
		dispatch(isError(error.message))
	}
}
