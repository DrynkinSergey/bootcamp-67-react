import { fetchUsers } from '../../services/api'
import { Link } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'

const Users = () => {
	const [users] = useHttp(fetchUsers)

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
