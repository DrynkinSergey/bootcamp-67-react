import React from 'react'
import { useForm } from 'react-hook-form'
import s from './TodoList.module.css'
import { useAddTodoMutation } from '../../redux/RTK_Query/todoApi'
export const AddForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const [addTodoToMyServer] = useAddTodoMutation()

	const submit = ({ title }) => {
		addTodoToMyServer({ title })
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
