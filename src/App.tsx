import { Nav } from './layouts/nav/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Item } from './pages/item/Item'
import { Home } from './pages/home/Home'
import { Footer } from './layouts/footer/Footer'

export const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Navigate to='all' />} />
				<Route path='man' element={<Home />} />
				<Route path='woman' element={<Home />} />
				<Route path='kids' element={<Home />} />
				<Route path='all' element={<Home />} />
				<Route path=':id' element={<Item />} />
			</Routes>
			<Footer />
		</>
	)
}
