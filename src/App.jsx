import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home, Login, NotFound, Register, Todos } from './pages'
import './index.css'
export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='todos' element={<Todos />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
