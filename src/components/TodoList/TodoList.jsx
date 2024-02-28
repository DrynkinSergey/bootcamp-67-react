import React from 'react'
import { AddForm } from './AddForm'
import { List } from './List'

export const TodoList = () => {
	return (
		<section>
			<AddForm />
			<List />
		</section>
	)
}
