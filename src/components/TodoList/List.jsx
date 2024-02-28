import React from 'react'
import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../redux/todolist/selectors'
import s from './TodoList.module.css'
export const List = () => {
	const todos = useSelector(selectTodos)
	return (
		<ul className={s.list}>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}
