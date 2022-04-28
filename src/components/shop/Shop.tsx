import { SingleShopItem } from './SingleShopItem'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { CategoryFilter } from './CategoryFilter'
import { motion } from 'framer-motion'
import { FADE, PRODUCTS_PER_PAGE } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { Pagination } from './Pagination'

export const Shop = () => {
	const { tempProducts, setTempProducts, setProducts } = useContext(ProductsContext)

	useEffect(() => {
		setTempProducts(PRODUCTS.slice(0, PRODUCTS_PER_PAGE))
		setProducts(PRODUCTS.slice(0, PRODUCTS_PER_PAGE))
	}, [setProducts, setTempProducts])

	if (!tempProducts) return null

	return (
		<section className='min-h-screen'>
			<CategoryFilter />
			{tempProducts.length ? (
				<>
					<motion.div
						className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'
						variants={FADE}
						animate='visible'
						initial='hidden'>
						{tempProducts.map(product => (
							<SingleShopItem key={product.id} {...product} />
						))}
					</motion.div>
					<Pagination />
				</>
			) : (
				<h2 className='text-4xl text-center my-56'>No products matching!</h2>
			)}
		</section>
	)
}
