import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './Nav.module.css'
import { MyContext } from '../../context/ContextProvider'
export const Nav = () => {
	const { user, logout } = useContext(MyContext)
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
				<li>
					{user} | <button onClick={logout}>Exit</button>
				</li>
			</ul>
		</nav>
	)
}
