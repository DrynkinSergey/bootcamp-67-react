import React from 'react'
import { Form } from '../../components/Form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'

export const Register = () => {
	const dispatch = useDispatch()
	const handleSubmit = data => {
		dispatch(registerThunk(data))
	}
	return (
		<div>
			<Form onDataSubmit={handleSubmit} />
		</div>
	)
}
