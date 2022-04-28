import { useContext } from 'react'
import { CATEGORIES, FADE } from '../../constants/constants'
import { motion } from 'framer-motion'
import { isCategoryType } from '../../helpers/typeguards'
import { ProductsContext } from '../../contexts/ProductsContext'

export const CategoryFilter = () => {
	const { category, setCategory } = useContext(ProductsContext)

	const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
		const newCategory = e.currentTarget.name
		if (isCategoryType(newCategory)) {
			setCategory(newCategory)
		}
	}
	return (
		<motion.div
			className='border-b pb-2 w-fit mx-auto flex gap-5 text-xl transition-colors duration-500 mt-52 mb-20'
			variants={FADE}
			initial='hidden'
			animate='visible'>
			{CATEGORIES.map(cat => (
				<div className='relative' key={cat}>
					<button
						key={cat}
						onClick={handleSort}
						name={cat}
						className='z-10 relative  p-2 md:p-4 text-xs xxs:text-base xs:text-xl'>
						{cat}
					</button>
					{cat === category && (
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
