import React from 'react'
import PropTypes from 'prop-types'

import s from './User.module.css'

export const User = ({ user, message }) => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>User</h1>
			{message && <h2>{message}</h2>}
			<div className={s.image}>
				<img src={user.image} alt={user.lastName} />
			</div>

			<h2 className={s.name}>
				{user.firstName} {user.lastName}
			</h2>
			<p className={s.age}>Age: {user.age}</p>
			<p>Gender: {user.gender}</p>

			<p>Email: {user.email}</p>
		</div>
	)
}

User.propTypes = {
	message: PropTypes.string,
	user: PropTypes.shape({
		image: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		gender: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		firstName: PropTypes.string.isRequired,
		address: PropTypes.shape({
			address: PropTypes.string,
			city: PropTypes.string,
		}),
	}),
}
