import { Route, Routes } from 'react-router-dom'
import { ItemPage } from './pages/item_page/ItemPage'
import { HomePage } from './pages/home_page/HomePage'
import { CartPage } from './pages/cart_page/CartPage'
import { Footer } from './components/footer/Footer'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='cart' element={<CartPage />} />
				<Route path=':id' element={<ItemPage />} />
			</Routes>
			<Footer />
		</>
	)
}
