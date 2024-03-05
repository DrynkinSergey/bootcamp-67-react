import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.todos.items
export const selectFilter = state => state.filter.filter

export const selectFilteredData = state => {
	const filter = selectFilter(state)
	const todos = selectTodos(state)
	console.log('Filter is done!')
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'favorites':
			return todos.filter(item => item.favorite)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
}

export const selectFilteredDataMemo = createSelector([selectFilter, selectTodos], (filter, todos) => {
	console.log('Filter is done!')
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'favorites':
			return todos.filter(item => item.favorite)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
})

export const selectUncompletedTodos = state => {
	console.log('Calculation is done!')

	const todos = selectTodos(state)
	return todos.reduce((total, todo) => (!todo.completed ? total + 1 : total), 0)
}

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
	console.log('Calculation is done!')

	return todos.reduce((total, todo) => (!todo.completed ? total + 1 : total), 0)
})
