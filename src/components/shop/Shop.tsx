import { productInterface, products } from '../../products'
import { Container } from '../container/Container'
import { ShopItem } from '../shop_item/ShopItem'

export const Shop = () => {
	return (
		<Container>
			<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
				{products.map((product: productInterface) => (
					<ShopItem key={product.id} {...product} />
				))}
			</div>
		</Container>
	)
}
