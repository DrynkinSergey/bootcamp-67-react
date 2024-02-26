import React, { useState } from 'react'

const FormDefault = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [age, setAge] = useState('')

	const handleChangeInput = e => {
		const { value, name } = e.target

		switch (name) {
			case 'name':
				return setName(value)
			case 'age':
				return setAge(value)
			case 'email':
				return setEmail(value)
			case 'password':
				return setPassword(value)
			default:
				break
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		// return 1
		console.log({ name, email, password, age })
		setName('')
		setPassword('')
		setEmail('')
		setAge('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			<label>
				Name
				<input name='name' onChange={handleChangeInput} value={name} />
			</label>
			<label>
				Email
				<input name='email' onChange={handleChangeInput} value={email} />
			</label>
			<label>
				Age
				<input name='age' onChange={handleChangeInput} value={age} />
			</label>
			<label>
				Password
				<input name='password' onChange={handleChangeInput} value={password} type='password' />
			</label>
			<button>Register</button>
		</form>
	)
}

export default FormDefault
