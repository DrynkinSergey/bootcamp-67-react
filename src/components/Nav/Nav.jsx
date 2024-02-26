import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './Nav.module.css'
export const Nav = () => {
	return (
		<nav>
			<ul className={s.navList}>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/users'>Users</NavLink>
				</li>
			</ul>
		</nav>
	)
}
