import React from 'react'
import { Form } from '../../components/Form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleSubmit = data => {
		dispatch(loginThunk(data))
			.unwrap()
			.then(data => {
				toast.success(`Welcome back, ${data.user.name}!`)
				navigate('/todos')
			})
			.catch(err => {
				toast.error('Credentials is not valid!')
			})
	}
	const values = {
		email: 'StepanUA@mail.com.ua',
		password: 'StepanUA@mail.com.ua',
	}
	return (
		<div>
			<Form formType='login' onDataSubmit={handleSubmit} values={values} />
		</div>
	)
}
