import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Shop } from './pages/Shop/Shop'
import { Cart } from './pages/Cart/Cart'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { NotFound } from './pages/NotFound/NotFound'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Shop />} />
					<Route path='cart' element={<Cart />} />
					<Route path='products/:productId' element={<ProductDetails />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}
