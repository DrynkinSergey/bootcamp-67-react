import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addArticleThunk } from '../../redux/articles/operations'

export const AddForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const submit = data => {
		console.log(data)
		dispatch(addArticleThunk(data))
		reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input placeholder='Enter the title...' {...register('title')} type='text' />
				<input placeholder='Enter the author...' {...register('author')} type='text' />
				<textarea placeholder='Enter the body...' {...register('body')} />
				<button>Add Article</button>
			</form>
		</div>
	)
}
