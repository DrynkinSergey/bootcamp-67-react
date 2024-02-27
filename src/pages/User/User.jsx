import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchUsersById } from '../../services/api'
import s from './User.module.css'
import { useHttp } from '../../hooks/useHttp'
import { useRef } from 'react'

const User = () => {
	const { userId } = useParams()
	const navigate = useNavigate()
	// 1. Отримали локацію
	const location = useLocation()
	// 2. Створили реф, для зберігання між рендерами локації
	const goBackRef = useRef(location.state?.from || '/users')
	console.log(location)
	const [user] = useHttp(fetchUsersById, userId)
	if (!user) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={s.wrapper}>
			<section>
				{/* 3. Використали реф */}
				<Link to={goBackRef.current}>Go back</Link>
				<button onClick={() => navigate(-1)}>Go back</button>
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
