import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { BrandsFilter } from '../brands_filter/BrandsFilter'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'

export const Shop = () => {
	const { products } = useContext(ProductsContext)
	const [tempProducts, setTempProducts] = useState(products)

	if (!products) return null

	return (
		<section>
			<BrandsFilter setTempProducts={setTempProducts} tempProducts={tempProducts} />
			{products.length ? (
				<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
					{tempProducts.map(product => (
						<SingleShopItem key={product.id} {...product} />
					))}
				</div>
			) : (
				<h2 className='text-4xl text-center my-56'>No products matching!</h2>
			)}
		</section>
	)
}
