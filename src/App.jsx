import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home, Login, NotFound, Register, Todos } from './pages'
import './index.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'
import { selectIsRefresh } from './redux/auth/slice'
import { Preloader } from './components/Preloader'
import { TodosRTK } from './pages/TodosRTK/TodosRTK'
export const App = () => {
	const isRefresh = useSelector(selectIsRefresh)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isRefresh ? (
		<Preloader />
	) : (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path='todos'
					element={
						<PrivateRoute>
							<Todos />
						</PrivateRoute>
					}
				/>
				<Route path='todosRTK' element={<TodosRTK />} />
				<Route
					path='login'
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path='register'
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
