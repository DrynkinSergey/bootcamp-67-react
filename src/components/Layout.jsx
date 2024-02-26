import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Nav } from './Nav/Nav'
import s from './Nav/Nav.module.css'
export const Layout = () => {
	return (
		<div>
			<header className={s.wrapper}>
				<div>React Router</div>
				<Nav />
			</header>
			<Outlet />
		</div>
	)
}
