import React from 'react'
import s from './TodoList.module.css'
import { useDispatch } from 'react-redux'
import { addToFav, removeTodo, toggleTodo } from '../../redux/todolist/actions'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'

import clsx from 'clsx'

export const TodoItem = ({ title, completed, id, favorite, handleEditItem }) => {
	const dispatch = useDispatch()

	return (
		<li className={clsx(s.item, favorite && s.liked)}>
			<input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo(id))} />
			<p>{title}</p>
			<div>
				<button className={s.btn} onClick={handleEditItem}>
					<FaEdit size={32} />
				</button>
				<button className={s.btn} onClick={() => dispatch(addToFav(id))}>
					{favorite ? <AiFillLike size={32} color='red' /> : <BiLike size={32} />}
				</button>
				<button className={s.btn} onClick={() => dispatch(removeTodo(id))}>
					<MdDeleteOutline size={32} />
				</button>
			</div>
		</li>
	)
}
