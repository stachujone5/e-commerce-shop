import { Fragment, useContext, useEffect, useState } from 'react'
import { BRANDS, defaultCheckedBrands } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { isBrandType } from '../../helpers/helpers'

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
		<div>
			<p className='text-center bg-navLight rounded-lg p-2 text-navTextLight'>Filter Brands</p>
			<div className='border-l-2 border-navLight p-3 mt-2 flex flex-col gap-2'>
				{BRANDS.map(brand => {
					return (
						<Fragment key={brand}>
							<label
								htmlFor={brand}
								className={
									isChecked[brand]
										? 'cursor-pointer bg-navLight p-2 rounded-lg text-navTextLight'
										: 'cursor-pointer p-2'
								}>
								{brand}
							</label>
							<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}
