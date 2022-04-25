import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { CategoryFilter } from '../category_filter/CategoryFilter'
import { motion } from 'framer-motion'
import { fade } from '../../constants/constants'

export const Shop = () => {
	const { tempProducts } = useContext(ProductsContext)

	if (!tempProducts) return null

	return (
		<section>
			<CategoryFilter />
			{tempProducts.length ? (
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
