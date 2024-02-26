import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { fetchUsersById } from '../../services/api'
import s from './User.module.css'
import { useHttp } from '../../hooks/useHttp'

const User = () => {
	const { id } = useParams()
	const [user] = useHttp(fetchUsersById, id)
	if (!user) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={s.wrapper}>
			<section>
				<Link to='/users'>Go back</Link>
				<h2>User info</h2>
				<img src={user.image} alt={user.lastName} />
				<h3>
					Name: {user.firstName} {user.lastName}
				</h3>
				<p>Email: {user.email}</p>
				<p>Age: {user.age}</p>
				<p>
					Address: {user.address.city}, {user.address.address}
				</p>
			</section>
			<section className={s.nestedWrapper}>
				<nav>
					<ul className={s.navlinks}>
						<li>
							<NavLink to='info'>More info</NavLink>
						</li>
						<li>
							<NavLink to='posts'>User posts</NavLink>
						</li>
					</ul>
				</nav>
				<Outlet />
			</section>
		</div>
	)
}

export default User
