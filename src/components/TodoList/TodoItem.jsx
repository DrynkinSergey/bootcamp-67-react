import React from 'react'
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'

import clsx from 'clsx'
import { addToFav, removeTodo, toggleTodo } from '../../redux/todolist/slice'
import { selectUser } from '../../redux/userSlice'

export const TodoItem = ({ title, author, completed, id, favorite, handleEditItem }) => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	return (
		<li className={clsx(s.item, favorite && s.liked)}>
			<input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo(id))} />
			<p>{title}</p>
			<p>Author: {author}</p>
			<div>
				{user === author && (
					<button className={s.btn} onClick={handleEditItem}>
						<FaEdit size={32} />
					</button>
				)}
				<button className={s.btn} onClick={() => dispatch(addToFav(id))}>
					{favorite ? <AiFillLike size={32} color='red' /> : <BiLike size={32} />}
				</button>
				{user === author && (
					<button className={s.btn} onClick={() => dispatch(removeTodo(id))}>
						<MdDeleteOutline size={32} />
					</button>
				)}
			</div>
		</li>
	)
}
