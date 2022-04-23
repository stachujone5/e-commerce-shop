import { useContext, useState } from 'react'
import { CATEGORIES } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { motion } from 'framer-motion'

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
		<div className='border-2 border-secondary w-fit mx-auto flex gap-5 rounded-3xl p-4 text-xl transition-colors duration-500 my-10'>
			{CATEGORIES.map(category => (
				<div className='relative'>
					<button key={category} onClick={handleSort} className='z-10 relative p-2'>
						{category}
					</button>
					{category === currCategory && (
						<motion.div
							className='w-full h-full rounded-full bg-secondary transition-colors duration-500 absolute top-0'
							layoutId='active'
							transition={{ type: 'spring', stiffness: 400, damping: 20 }}
						/>
					)}
				</div>
			))}
		</div>
	)
}
