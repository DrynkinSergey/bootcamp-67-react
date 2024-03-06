import React from 'react'
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { Link } from 'react-router-dom'
export const Form = ({ onDataSubmit, formType, values }) => {
	const { register, reset, handleSubmit } = useForm({
		defaultValues: values,
	})

	const submit = data => {
		console.log(data)
		onDataSubmit(data)
		reset()
	}

	return (
		<div className={s.wrapperForm}>
			<form className={s.form} onSubmit={handleSubmit(submit)}>
				{formType !== 'login' && (
					<div className={s.inputField}>
						<label htmlFor='name'>Name:</label>
						<input id='name' placeholder='Enter name...' {...register('name')} />
					</div>
				)}
				<div className={s.inputField}>
					<label htmlFor='email'>Email:</label>
					<input id='email' placeholder='Enter email...' {...register('email')} type='email' />
				</div>
				<div className={s.inputField}>
					<label htmlFor='password'>Password:</label>
					<input id='password' placeholder='Enter pass...' {...register('password')} type='password' />
				</div>
				<button>{formType === 'login' ? 'Login' : 'Register'}</button>
				<p className={s.link}>
					{formType !== 'login' ? 'You already have account?' : 'You do not have account?'}
					{formType === 'login' ? <Link to='/register'>Sign in!</Link> : <Link to='/login'>Sign up!</Link>}
				</p>
			</form>
		</div>
	)
}
