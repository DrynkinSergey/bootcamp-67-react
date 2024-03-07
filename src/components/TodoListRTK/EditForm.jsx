import React from 'react'
import { useForm } from 'react-hook-form'
import s from './TodoList.module.css'
import { useEditTodoMutation } from '../../redux/RTK_Query/todoApi'
export const EditForm = ({ content, toggle }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			title: content.title,
		},
	})
	const [editTodo] = useEditTodoMutation()

	const submit = data => {
		toggle()
		editTodo({ ...content, ...data })
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
