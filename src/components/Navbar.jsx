import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<header>
			<NavLink to='/'>React Shop</NavLink>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/cart'>Cart</NavLink>
			</nav>
		</header>
	)
}
