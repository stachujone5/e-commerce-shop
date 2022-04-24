import { Nav } from './layouts/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { Item } from './pages/item/Item'
import { Home } from './pages/home/Home'
import { Footer } from './layouts/footer/Footer'
import { Cart } from './pages/cart/Cart'
import { AnimatePresence } from 'framer-motion'

export const changeRoute = {
	enter: {
		opacity: 1,
		x: 0,
	},
	exit: {
		x: '-100vw',
	},
}

export const App = () => {
	return (
		<>
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path=':id' element={<Item />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	)
}
