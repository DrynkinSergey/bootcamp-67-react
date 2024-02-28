import React from 'react'
import { AddForm } from './AddForm'
import { List } from './List'
import { Filter } from './Filter'

export const TodoList = () => {
	return (
		<section>
			<AddForm />
			<Filter />
			<List />
		</section>
	)
}
