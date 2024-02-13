import React from 'react'
import PropTypes from 'prop-types'
export const User = ({ user, message }) => {
	return (
		<div>
			<h1>User</h1>
			{message && <h2>{message}</h2>}
			<img src={user.image} alt={user.lastName} />
			<h2>
				{user.firstName} {user.lastName}
			</h2>
			<p>Age: {user.age}</p>
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
