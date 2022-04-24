import { useContext, useEffect, useState } from 'react'
import { BRANDS, defaultCheckedBrands } from '../../constants/constants'
import { ProductInterface } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { isBrandType } from '../../helpers/helpers'
import { motion } from 'framer-motion'
import { fade } from '../shop/Shop'

interface BrandsFilterProps {
	tempProducts: ProductInterface[]
	setTempProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}

export const BrandsFilter = ({ setTempProducts, tempProducts }: BrandsFilterProps) => {
	const [isChecked, setIsChecked] = useState(defaultCheckedBrands)
	const { products } = useContext(ProductsContext)

	useEffect(() => {
		const filteredProducts = products.filter(product => {
			return isChecked[product.shortBrand]
		})
		if (filteredProducts.length) {
			setTempProducts(filteredProducts)
			return
		}
		setTempProducts(products)
	}, [isChecked, setTempProducts, tempProducts, products])

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		if (isBrandType(id)) {
			setIsChecked(prevState => {
				return { ...prevState, [id]: !prevState[id] }
			})
		}
	}

	return (
		<motion.div className='flex gap-4 mb-5 md:mb-7' variants={fade} animate='visible' initial='hidden'>
			{BRANDS.map(brand => {
				return (
					<div key={brand} className='text-sm sm:text-base md:text-xl'>
						<label
							htmlFor={brand}
							className={isChecked[brand] ? 'border-b-2 border-secondary cursor-pointer' : 'cursor-pointer text'}>
							{brand}
						</label>
						<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
					</div>
				)
			})}
		</motion.div>
	)
}
