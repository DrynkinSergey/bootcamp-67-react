import React from 'react'
import { Form } from '../../components/Form/Form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'
import * as yup from 'yup'
import { registerSchema } from '../../schemas/registerSchema'

export const Register = () => {
	const dispatch = useDispatch()
	const handleSubmit = data => {
		dispatch(registerThunk(data))
	}

	return (
		<div>
			<Form onDataSubmit={handleSubmit} schema={registerSchema} />
		</div>
	)
}
