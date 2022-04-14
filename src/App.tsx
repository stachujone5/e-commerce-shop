import { Nav } from './layouts/nav/Nav'
import { Header } from './layouts/header/Header'
import { Shop } from './components/shop/Shop'

export const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<Shop />
		</>
	)
}
