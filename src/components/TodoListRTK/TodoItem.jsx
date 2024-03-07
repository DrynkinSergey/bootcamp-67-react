import React from 'react'
import s from './TodoList.module.css'
import { MdDeleteOutline } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'
import clsx from 'clsx'
import { useAddToFavMutation, useDeleteTodoMutation, useToggleTodoMutation } from '../../redux/RTK_Query/todoApi'

export const TodoItem = ({ title, author, createdAt, completed, id, favorite, handleEditItem }) => {
	const [deleteTodo, { isLoading }] = useDeleteTodoMutation()
	const [toggleTodo] = useToggleTodoMutation()
	const [addToFav] = useAddToFavMutation()
	return (
		<li className={clsx(s.item, favorite && s.liked)}>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => toggleTodo({ title, author, completed: !completed, id, favorite, createdAt })}
			/>
			<p>{title}</p>
			<div>
				{author === author && (
					<button className={s.btn} onClick={handleEditItem}>
						<FaEdit size={32} />
					</button>
				)}
				<button
					className={s.btn}
					onClick={() => addToFav({ title, author, completed, id, favorite: !favorite, createdAt })}
				>
					{favorite ? <AiFillLike size={32} color='red' /> : <BiLike size={32} />}
				</button>
				{author === author && (
					<button disabled={isLoading} className={s.btn} onClick={() => deleteTodo(id)}>
						<MdDeleteOutline size={32} />
					</button>
				)}
			</div>
		</li>
	)
}
