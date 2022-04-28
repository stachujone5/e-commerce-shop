import clsx from 'clsx'
import { Fragment, useContext } from 'react'
import { BRANDS } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsContext'
import { isBrandType } from '../../helpers/typeguards'
import { Rows } from '../shared/Rows'

export const BrandsFilter = () => {
	const { setCheckedBrands, checkedBrands } = useContext(ProductsContext)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		if (isBrandType(id)) {
			setCheckedBrands(prevState => {
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
								checkedBrands[brand] && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
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
