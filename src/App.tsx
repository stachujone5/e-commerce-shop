import { Nav } from './layouts/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { Item } from './pages/item/Item'
import { Home } from './pages/home/Home'

export const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path=':id' element={<Item />} />
			</Routes>
		</>
	)
}
