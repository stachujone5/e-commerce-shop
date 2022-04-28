import clsx from 'clsx'
import { Fragment, useContext, useEffect, useState } from 'react'
import { BRANDS, defaultCheckedBrands } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { isBrandType } from '../../helpers/helpers'
import { Rows } from '../shared/Rows'

export const BrandsFilter = () => {
	const [isChecked, setIsChecked] = useState(defaultCheckedBrands)
	const { products, tempProducts, setTempProducts } = useContext(ProductsContext)

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
		<Rows title='Filter Brands'>
			{BRANDS.map(brand => {
				return (
					<Fragment key={brand}>
						<label
							htmlFor={brand}
							className={clsx(
								'cursor-pointer p-2',
								isChecked[brand] && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
							)}>
							{brand}
						</label>
						<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
					</Fragment>
				)
			})}
		</Rows>
	)
}
