import React, { lazy, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { Layout } from './components/Layout'
import './index.css'
import Users from './pages/Users/Users'
import User from './pages/User/User'
// import { Aim } from './pages/About/Aim'
// import Company from './pages/About/Company'
// import Team from './pages/About/Team'
import UserInfo from './pages/User/UserInfo'
import UserPosts from './pages/User/UserPosts'
import Register from './pages/Register/Register'
import { MyContext } from './context/ContextProvider'
import { Posts } from './pages/Posts/Posts'
import { SinglePost } from './pages/SinglePost/SinglePost'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Company = lazy(() => import('./pages/About/Company'))
const Aim = lazy(() => import('./pages/About/Aim'))
const Team = lazy(() => import('./pages/About/Team'))

export const App = () => {
	const { isLoggedIn } = useContext(MyContext)
	return isLoggedIn ? (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				{/* about/aim */}
				<Route path='about' element={<About />}>
					<Route index element={<h3>Please click on the links at top</h3>} />
					<Route path='aim' element={<Aim />} />
					<Route path='company' element={<Company />} />
					<Route path='team' element={<Team />} />
				</Route>

				<Route path='posts' element={<Posts />} />
				<Route path='posts/:postId' element={<SinglePost />}>
					<Route path='bio' element={<h1>Test bio</h1>} />
				</Route>

				<Route path='users' element={<Users />} />
				{/* users/71/posts */}
				<Route path='users/:userId' element={<User />}>
					<Route path='info' element={<UserInfo />} />
					<Route path='posts' element={<UserPosts />} />
				</Route>
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	) : (
		<Routes>
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Register />} />
			{/* <Route path='*' element={<NotFound />} /> */}
			<Route path='*' element={<Navigate to='/register' />} />
		</Routes>
	)
}
