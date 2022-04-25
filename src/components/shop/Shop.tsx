import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { CategoryFilter } from '../category_filter/CategoryFilter'
import { motion } from 'framer-motion'
import { FADE } from '../../constants/constants'

export const Shop = () => {
	const { tempProducts } = useContext(ProductsContext)

	if (!tempProducts) return null

	return (
		<section className='min-h-screen'>
			<CategoryFilter />
			{tempProducts.length ? (
				<motion.div
					className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'
					variants={FADE}
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
