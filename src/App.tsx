import { Route, Routes } from 'react-router-dom'
import { ItemPage } from './pages/ItemPage'
import { HomePage } from './pages/HomePage'
import { CartPage } from './pages/CartPage'
import { ErrorPage } from './pages/ErrorPage'

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
