import { productInterface, products } from '../../products'
import { ShopItem } from '../shop_item/ShopItem'

export const Shop = () => {
	return (
		<div className='columns-1'>
			{products.map((product: productInterface) => (
				<ShopItem {...product} />
			))}
		</div>
	)
}
