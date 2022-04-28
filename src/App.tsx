import { Route, Routes } from 'react-router-dom'
import { ItemPage } from './pages/item_page/ItemPage'
import { HomePage } from './pages/home_page/HomePage'
import { CartPage } from './pages/cart_page/CartPage'
import { ErrorPage } from './pages/error_page/ErrorPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='cart' element={<CartPage />} />
			<Route path=':id' element={<ItemPage />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}
