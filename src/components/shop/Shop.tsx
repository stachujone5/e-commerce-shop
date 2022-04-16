import { productInterface, products } from '../../products'
import { SingleShopItem } from '../single_shop_item/SingleShopItem'

export const Shop = () => {
	return (
		<section>
			<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
				{products.map((product: productInterface) => (
					<SingleShopItem key={product.id} {...product} />
				))}
			</div>
		</section>
	)
}
