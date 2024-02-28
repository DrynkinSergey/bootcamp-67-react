import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todolist/actions'
import s from './TodoList.module.css'
export const AddForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()
	const submit = ({ title }) => {
		const newTodo = { title, id: nanoid(), completed: false }
		console.log(newTodo)
		dispatch(addTodo(newTodo))
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
