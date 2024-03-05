import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
export const Navbar = () => {
	return (
		<header className={s.header}>
			<NavLink className={s.logo} to='/'>
				React Shop
			</NavLink>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/cart'>Cart</NavLink>
			</nav>
		</header>
	)
}
