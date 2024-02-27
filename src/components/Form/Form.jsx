import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import s from './Form.module.css'

const Form = () => {
	const { register, reset, handleSubmit } = useForm()
	const { login, isLoggedIn } = useContext(MyContext)

	const navigate = useNavigate()

	const submit = data => {
		console.log(data)
		login(data.name)
		navigate('/users')
		reset()
	}

	return (
		<div className={s.wrapper}>
			<form className={s.form} onSubmit={handleSubmit(submit)}>
				<h2>Register</h2>
				<label>
					Name
					<input
						placeholder='Enter your name...'
						{...register('name', { required: true, minLength: 5, maxLength: 9 })}
						autoFocus
					/>
				</label>
				<label>
					Password
					<input placeholder='Enter your pass...' {...register('password')} type='password' />
				</label>
				<button>Register</button>
			</form>
		</div>
	)
}

export default Form
