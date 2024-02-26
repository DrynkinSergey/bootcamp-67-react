import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/api'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchUsers()
			.then(data => setUsers(data))
			.catch(err => setError(err.message))
	}, [])
	return (
		<div>
			<h1>Users page</h1>
			<ul>
				{users?.map(user => (
					<li key={user.id}>
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
