import React from 'react'
import { AddForm } from './AddForm'
import { List } from './List'
import { Filter } from './Filter'
import { UserForm } from './UserForm'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

export const TodoList = () => {
	const user = useSelector(selectUser)
	return (
		<section>
			<UserForm />
			{user && <h2>Current user: {user}</h2>}
			<AddForm />
			<Filter />
			<List />
		</section>
	)
}
