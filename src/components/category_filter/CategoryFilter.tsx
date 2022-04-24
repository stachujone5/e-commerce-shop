import { useContext, useState } from 'react'
import { CATEGORIES } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { motion } from 'framer-motion'
import { fade } from '../shop/Shop'

export const CategoryFilter = () => {
	const { setProducts } = useContext(ProductsContext)
	const [currCategory, setCurrCategory] = useState('all')

	const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
		const category = e.currentTarget.textContent
		if (category === 'all') {
			setProducts(PRODUCTS)
			setCurrCategory('all')
			return
		}
		setProducts(PRODUCTS.filter(product => product.category === category))
		setCurrCategory(category!)
	}
	return (
		<motion.div
			className='border-2 border-secondary w-fit mx-auto flex gap-5 rounded-3xl p-4 text-xl transition-colors duration-500 my-10'
			variants={fade}
			initial='hidden'
			animate='visible'>
			{CATEGORIES.map(category => (
				<div className='relative' key={category}>
					<button key={category} onClick={handleSort} className='z-10 relative p-2 text-xs xxs:text-base xs:text-xl'>
						{category}
					</button>
					{category === currCategory && (
						<motion.div
							className='w-full h-full rounded-full bg-secondary transition-colors duration-500 absolute top-0'
							layoutId='active'
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						/>
					)}
				</div>
			))}
		</motion.div>
	)
}
