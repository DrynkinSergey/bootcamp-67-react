import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import s from './TodoList.module.css'
import { editTodoThunk } from '../../redux/todolist/operations'
export const EditForm = ({ content, toggle }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			title: content.title,
		},
	})
	const dispatch = useDispatch()
	const submit = data => {
		dispatch(editTodoThunk({ ...content, ...data }))
		toggle()
		reset()
	}
	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('title')} type='text' />
				<input {...register('completed')} type='checkbox' /> DONE
				<input {...register('favorite')} type='checkbox' /> LIKE
				<button>Edit todo</button>
			</form>
		</div>
	)
}
