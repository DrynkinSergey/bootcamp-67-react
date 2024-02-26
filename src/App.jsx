import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { Layout } from './components/Layout'
import './index.css'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import { Aim } from './pages/About/Aim'
import Company from './pages/About/Company'
import Team from './pages/About/Team'
import UserInfo from './pages/User/UserInfo'
import UserPosts from './pages/User/UserPosts'
export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />

					<Route path='about' element={<About />}>
						<Route index element={<h3>Please click on the links at top</h3>} />
						<Route path='aim' element={<Aim />} />
						<Route path='company' element={<Company />} />
						<Route path='team' element={<Team />} />
					</Route>

					<Route path='users' element={<Users />} />
					<Route path='users/:id' element={<User />}>
						<Route path='info' element={<UserInfo />} />
						<Route path='posts' element={<UserPosts />} />
					</Route>
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
