import React from 'react'
import { Input } from './Input'

export const Form = () => {
	return (
		<form>
			<Input label='Name' />
			<Input label='Email' />
			<Input label='Author' />
		</form>
	)
}
