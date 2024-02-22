import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/ContextProvider'

export const LoginForm = () => {
	const { login } = useContext(UserContext)
	const [username, setUsername] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		login(username)
	}
	return (
		<form onSubmit={handleSubmit}>
			<h2>LoginForm</h2>
			<input type='text' value={username} onChange={e => setUsername(e.target.value)} />
			<button>Login</button>
		</form>
	)
}
