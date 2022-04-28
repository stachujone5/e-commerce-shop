import { useContext, useState } from 'react'
import { CATEGORIES, DEFAULT_CATEGORY, FADE } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { motion } from 'framer-motion'
import { isCategoryType } from '../../helpers/typeguards'

export const CategoryFilter = () => {
	const { setProducts } = useContext(ProductsContext)
	const [currCategory, setCurrCategory] = useState(DEFAULT_CATEGORY)

	const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
		const category = e.currentTarget.name
		if (isCategoryType(category)) {
			if (category === 'all') {
				setProducts(PRODUCTS)
				setCurrCategory(category)
				return
			}
			setProducts(PRODUCTS.filter(product => product.category === category))
			setCurrCategory(category)
		}
	}
	return (
		<motion.div
			className='border-b pb-2 w-fit mx-auto flex gap-5 text-xl transition-colors duration-500 mt-52 mb-20'
			variants={FADE}
			initial='hidden'
			animate='visible'>
			{CATEGORIES.map(category => (
				<div className='relative' key={category}>
					<button
						key={category}
						onClick={handleSort}
						name={category}
						className='z-10 relative  p-2 md:p-4 text-xs xxs:text-base xs:text-xl'>
						{category}
					</button>
					{category === currCategory && (
						<motion.div
							className='w-full h-full rounded-3xl bg-secondary transition-colors duration-500 absolute top-0'
							layoutId='active'
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						/>
					)}
				</div>
			))}
		</motion.div>
	)
}
