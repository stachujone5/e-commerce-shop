import { useLocation } from 'react-router-dom'
import { productInterface, products } from '../../products'
import { SingleShopItem } from '../single_shop_item/SingleShopItem'

export const Shop = () => {
	const { pathname } = useLocation()
	const path = pathname.slice(1)
	let newProducts = products.filter(product => product.category === path)
	if (path === 'all') {
		newProducts = products
	}

	return (
		<section>
			<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
				{newProducts.map((product: productInterface) => (
					<SingleShopItem key={product.id} {...product} />
				))}
			</div>
		</section>
	)
}
