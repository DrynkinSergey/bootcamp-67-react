import React, { useEffect } from 'react'
import { AddForm } from './AddForm'
import { List } from './List'
import { Filter } from './Filter'
import { UserForm } from './UserForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import { fetchDataThunk } from '../../redux/todolist/operations'
import { selectIsError, selectIsLoading, setValue } from '../../redux/todolist/slice'
import { selectUncompletedTodos, selectUncompletedTodosMemo } from '../../redux/todolist/selectors'

export const TodoList = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])
	const error = useSelector(selectIsError)
	const uncompletedTasks = useSelector(selectUncompletedTodosMemo)
	const loading = useSelector(selectIsLoading)
	return (
		<section>
			<UserForm />
			{user && <h2>Current user: {user}</h2>}
			<AddForm />
			<Filter />
			<input type='text' placeholder='Enter test value' onChange={e => dispatch(setValue(e.target.value))} />
			<h1>You have {uncompletedTasks} uncompleted tasks </h1>
			{loading && <h1>Loading...</h1>}
			{!error ? <List /> : <h1>Something went wrong! Try again later...</h1>}
		</section>
	)
}
