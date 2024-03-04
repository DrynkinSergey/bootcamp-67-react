import React from 'react'
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'

import clsx from 'clsx'

import { selectUser } from '../../redux/userSlice'
import { addToFavThunk, deleteTodoThunk, toggleTodoThunk } from '../../redux/todolist/operations'

export const TodoItem = ({ title, author, createdAt, completed, id, favorite, handleEditItem }) => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	return (
		<li className={clsx(s.item, favorite && s.liked)}>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleTodoThunk({ title, author, completed: !completed, id, favorite, createdAt }))}
			/>
			<p>{title}</p>
			<p>Author: {author}</p>
			<div>
				{author === author && (
					<button className={s.btn} onClick={handleEditItem}>
						<FaEdit size={32} />
					</button>
				)}
				<button
					className={s.btn}
					onClick={() => dispatch(addToFavThunk({ title, author, completed, id, favorite: !favorite, createdAt }))}
				>
					{favorite ? <AiFillLike size={32} color='red' /> : <BiLike size={32} />}
				</button>
				{author === author && (
					<button className={s.btn} onClick={() => dispatch(deleteTodoThunk(id))}>
						<MdDeleteOutline size={32} />
					</button>
				)}
			</div>
		</li>
	)
}
