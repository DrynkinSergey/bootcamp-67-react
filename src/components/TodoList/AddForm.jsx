import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import s from './TodoList.module.css'
import { addTodo } from '../../redux/todolist/slice'
export const AddForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()
	const submit = ({ title }) => {
		const newTodo = { title, id: nanoid(), completed: false, favorite: false }
		console.log(newTodo)
		dispatch(addTodo(title))
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
