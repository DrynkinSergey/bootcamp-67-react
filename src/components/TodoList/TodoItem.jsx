import React from 'react'
import s from './TodoList.module.css'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../redux/todolist/actions'
export const TodoItem = ({ title, completed, id }) => {
	const dispatch = useDispatch()
	return (
		<li className={s.item}>
			<input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo(id))} />
			<p>{title}</p>
			<button onClick={() => dispatch(removeTodo(id))}>Delete</button>
		</li>
	)
}
