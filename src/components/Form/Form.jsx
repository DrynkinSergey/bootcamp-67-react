import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
	const { register, reset, handleSubmit } = useForm()

	const submit = data => {
		console.log(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<h2>Register</h2>
			<label>
				Name
				<input {...register('name', { required: true, minLength: 5, maxLength: 9 })} autoFocus />
			</label>
			<label>
				Email
				<input {...register('email')} />
			</label>
			<label>
				Status
				<input {...register('status')} />
			</label>
			<label>
				Age
				<input {...register('age')} />
			</label>

			<select {...register('currency')}>
				<option value='UAH'>uah</option>
				<option value='USD'>usd</option>
			</select>
			<label>
				Password
				<input {...register('password')} type='password' />
			</label>
			<button>Register</button>
		</form>
	)
}

export default Form
