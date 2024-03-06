import React from 'react'
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { Link } from 'react-router-dom'
export const Form = () => {
	const { register, reset, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)
		reset()
	}
	return (
		<div className={s.wrapperForm}>
			<form className={s.form} onSubmit={handleSubmit(submit)}>
				<div className={s.inputField}>
					<label htmlFor='name'>Name:</label>
					<input id='name' placeholder='Enter name...' {...register('name')} />
				</div>
				<div className={s.inputField}>
					<label htmlFor='email'>Email:</label>
					<input id='email' placeholder='Enter email...' {...register('email')} type='email' />
				</div>
				<div className={s.inputField}>
					<label htmlFor='password'>Password:</label>
					<input id='password' placeholder='Enter pass...' {...register('password')} type='password' />
				</div>
				<button>Register</button>
				<p className={s.link}>
					You already have account? <Link to='/login'>Sign in!</Link>
				</p>
			</form>
		</div>
	)
}
