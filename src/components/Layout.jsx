import React, { Suspense } from 'react'
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
			<div className={s.outletWrapper}>
				<Suspense fallback={<h1>Load page....</h1>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}
