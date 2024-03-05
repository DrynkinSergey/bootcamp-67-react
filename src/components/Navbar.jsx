import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { useSelector } from 'react-redux'
import { selectCart } from '../redux/cart/slice'
export const Navbar = () => {
	const cart = useSelector(selectCart).length
	return (
		<header className={s.header}>
			<NavLink className={s.logo} to='/'>
				React Shop
			</NavLink>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink className={s.counterCart} to='/cart'>
					Cart {cart ? <span>{cart}</span> : null}
				</NavLink>
			</nav>
		</header>
	)
}
