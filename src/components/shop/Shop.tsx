import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { BrandsFilter } from '../brands_filter/BrandsFilter'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { CategoryFilter } from '../category_filter/CategoryFilter'
import { motion } from 'framer-motion'

export const fade = {
	visible: {
		opacity: 1,
		transition: { duration: 0.5 },
	},

	hidden: {
		opacity: 0,
	},
}

export const Shop = () => {
	const { products } = useContext(ProductsContext)
	const [tempProducts, setTempProducts] = useState(products)

	if (!tempProducts) return null

	return (
		<section>
			<CategoryFilter />
			<BrandsFilter setTempProducts={setTempProducts} tempProducts={tempProducts} />
			{products.length ? (
				<motion.div
					className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'
					variants={fade}
					animate='visible'
					initial='hidden'>
					{tempProducts.map(product => (
						<SingleShopItem key={product.id} {...product} />
					))}
				</motion.div>
			) : (
				<h2 className='text-4xl text-center my-56'>No products matching!</h2>
			)}
		</section>
	)
}
