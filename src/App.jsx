import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { Layout } from './components/Layout'
import './index.css'
import Users from './pages/Users/Users'
import User from './pages/User/User'
export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
					<Route path='users/:id' element={<User />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
