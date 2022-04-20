import { useContext, useEffect, useState } from 'react'
import { BRANDS, defaultCheckedBrands } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { isBrandType } from '../../helpers/helpers'

export const BrandsFilter = () => {
	const [isChecked, setIsChecked] = useState(defaultCheckedBrands)
	const { setProducts } = useContext(ProductsContext)

	useEffect(() => {
		const filteredProducts = PRODUCTS.filter(product => {
			return isChecked[product.shortBrand]
		})
		setProducts(filteredProducts)
	}, [isChecked, setProducts])

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		if (isBrandType(id)) {
			setIsChecked(prevState => {
				return { ...prevState, [id]: !prevState[id] }
			})
		}
	}

	return (
		<div className='flex gap-4 mb-5 md:mb-7'>
			{BRANDS.map(brand => {
				return (
					<div key={brand} className='text-sm sm:text-base md:text-xl'>
						<label htmlFor={brand} className={isChecked[brand] ? 'border-b-2 cursor-pointer' : 'cursor-pointer'}>
							{brand}
						</label>
						<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
					</div>
				)
			})}
		</div>
	)
}
