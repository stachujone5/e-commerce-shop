import { SingleShopItem } from './SingleShopItem'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { CategoryFilter } from './CategoryFilter'
import { motion } from 'framer-motion'
import { FADE } from '../../constants/constants'
import { DEFAULT_PRODUCTS } from '../../constants/defaults'
import { returnNewProducts } from '../../helpers/returnNewProducts'

export const Shop = () => {
	const { setProducts, products, checkedBrands, category, sorting } = useContext(ProductsContext)

	useEffect(() => {
		setProducts(DEFAULT_PRODUCTS)
	}, [setProducts])

	useEffect(() => {
		setProducts(returnNewProducts(category, sorting, checkedBrands))
	}, [checkedBrands, setProducts, category, sorting])

	if (!products) return null

	return (
		<section className='min-h-screen'>
			<CategoryFilter />
			{products.length ? (
				<motion.div
					className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'
					variants={FADE}
					animate='visible'
					initial='hidden'>
					{products.map(product => (
						<SingleShopItem key={product.id} {...product} />
					))}
				</motion.div>
			) : (
				<h2 className='text-4xl text-center my-56'>No products matching!</h2>
			)}
		</section>
	)
}
