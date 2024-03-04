import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import s from './TodoList.module.css'
import { selectUser } from '../../redux/userSlice'
import { addTodoThunk } from '../../redux/todolist/operations'
export const AddForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const submit = ({ title }) => {
		dispatch(addTodoThunk({ title, author: user, createdAt: new Date().toLocaleTimeString() }))
		reset()
	}
	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('title')} type='text' />
				<button>Add todo</button>
			</form>
		</div>
	)
}
