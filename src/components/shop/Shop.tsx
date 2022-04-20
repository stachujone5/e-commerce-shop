import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { BrandsFilter } from '../brands_filter/BrandsFilter'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'

export const Shop = () => {
	const { products } = useContext(ProductsContext)

	if (!products) return null

	return (
		<section>
			<BrandsFilter />
			{products.length ? (
				<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
					{products.map(product => (
						<SingleShopItem key={product.id} {...product} />
					))}
				</div>
			) : (
				<h2 className='text-4xl text-center my-56'>No products matching!</h2>
			)}
		</section>
	)
}
